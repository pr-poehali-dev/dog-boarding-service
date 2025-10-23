'''
Business: Миграция старых base64 фото на PostImage хостинг
Args: event - dict с httpMethod
      context - object с attributes: request_id
Returns: HTTP response dict с результатом миграции
'''

import json
import os
import psycopg2
import requests
from typing import Dict, Any

DATABASE_URL = os.environ.get('DATABASE_URL')

def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

def upload_to_postimage(base64_data: str) -> str:
    """Загружает изображение на PostImage и возвращает URL"""
    try:
        if ',' in base64_data:
            base64_data = base64_data.split(',')[1]
        
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
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Only POST method allowed'})
        }
    
    conn = get_db_connection()
    cur = conn.cursor()
    
    try:
        # Находим все фото с base64 URL
        cur.execute(
            "SELECT id, name, url FROM t_p55554963_dog_boarding_service.gallery_photos WHERE url LIKE 'data:image%'"
        )
        photos = cur.fetchall()
        
        migrated = 0
        failed = 0
        
        for photo_id, name, base64_url in photos:
            uploaded_url = upload_to_postimage(base64_url)
            
            if uploaded_url:
                cur.execute(
                    'UPDATE t_p55554963_dog_boarding_service.gallery_photos SET url = %s WHERE id = %s',
                    (uploaded_url, photo_id)
                )
                migrated += 1
            else:
                failed += 1
        
        conn.commit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'migrated': migrated,
                'failed': failed,
                'total': len(photos)
            })
        }
    
    finally:
        cur.close()
        conn.close()
