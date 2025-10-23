'''
Business: Управление фотографиями в галерее (получение, добавление, удаление)
Args: event - dict с httpMethod, body, queryStringParameters
      context - object с attributes: request_id, function_name
Returns: HTTP response dict с фотографиями или статусом операции
'''

import json
import os
import psycopg2
import requests
import base64
from typing import Dict, Any

DATABASE_URL = os.environ.get('DATABASE_URL')
UPLOAD_PASSWORD = '130125765'

def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

def upload_to_postimage(base64_data: str) -> str:
    """Загружает изображение на PostImage и возвращает URL"""
    try:
        # Извлекаем чистый base64 без префикса data:image/...
        if ',' in base64_data:
            base64_data = base64_data.split(',')[1]
        
        # PostImage API
        response = requests.post(
            'https://postimages.org/json/rr',
            data={
                'upload': base64_data,
                'type': 'base64'
            },
            timeout=30
        )
        
        if response.status_code == 200:
            result = response.json()
            return result.get('url', '')
        
        return ''
    except Exception as e:
        print(f'PostImage upload error: {e}')
        return ''

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Password',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    conn = get_db_connection()
    cur = conn.cursor()
    
    try:
        if method == 'GET':
            cur.execute('SELECT id, name, url, created_at FROM t_p55554963_dog_boarding_service.gallery_photos ORDER BY created_at DESC')
            rows = cur.fetchall()
            photos = [{'id': row[0], 'name': row[1], 'url': row[2], 'created_at': str(row[3])} for row in rows]
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'photos': photos})
            }
        
        elif method == 'POST':
            password = event.get('headers', {}).get('X-Password', '')
            if password != UPLOAD_PASSWORD:
                return {
                    'statusCode': 403,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Неверный пароль'})
                }
            
            body_data = json.loads(event.get('body', '{}'))
            name = body_data.get('name', '')
            url = body_data.get('url', '')
            
            if not name or not url:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Необходимо указать name и url'})
                }
            
            # Если URL - это base64 data, загружаем на PostImage
            if url.startswith('data:image'):
                uploaded_url = upload_to_postimage(url)
                if uploaded_url:
                    url = uploaded_url
                # Если загрузка не удалась, используем оригинальный base64
            
            cur.execute(
                'INSERT INTO t_p55554963_dog_boarding_service.gallery_photos (name, url) VALUES (%s, %s) RETURNING id',
                (name, url)
            )
            photo_id = cur.fetchone()[0]
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'id': photo_id, 'url': url})
            }
        
        elif method == 'DELETE':
            password = event.get('headers', {}).get('X-Password', '')
            if password != UPLOAD_PASSWORD:
                return {
                    'statusCode': 403,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Неверный пароль'})
                }
            
            params = event.get('queryStringParameters', {})
            photo_id = params.get('id', '')
            
            if not photo_id:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Необходимо указать id фото'})
                }
            
            cur.execute('DELETE FROM t_p55554963_dog_boarding_service.gallery_photos WHERE id = %s', (photo_id,))
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'success': True})
            }
        
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
    
    finally:
        cur.close()
        conn.close()