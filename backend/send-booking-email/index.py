'''
Business: Отправка email уведомлений о бронированиях передержки
Args: event с httpMethod, body (имя, email, телефон, даты)
Returns: HTTP response с результатом отправки email
'''

import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name: str = body_data.get('name', '')
    email: str = body_data.get('email', '')
    phone: str = body_data.get('phone', '')
    pet_name: str = body_data.get('petName', '')
    start_date: str = body_data.get('startDate', '')
    end_date: str = body_data.get('endDate', '')
    cost: str = body_data.get('cost', '')
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    notification_email = os.environ.get('NOTIFICATION_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, notification_email]):
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email configuration not set'}),
            'isBase64Encoded': False
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новое бронирование передержки - {name}'
    msg['From'] = smtp_user
    msg['To'] = notification_email
    
    html_content = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }}
            .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
            .info-row {{ margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }}
            .label {{ font-weight: bold; color: #9333ea; }}
            .footer {{ margin-top: 20px; text-align: center; color: #666; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2 style="margin: 0;">🐾 Новое бронирование!</h2>
            </div>
            <div class="content">
                <div class="info-row">
                    <span class="label">Клиент:</span> {name}
                </div>
                <div class="info-row">
                    <span class="label">Email:</span> {email}
                </div>
                <div class="info-row">
                    <span class="label">Телефон:</span> {phone}
                </div>
                <div class="info-row">
                    <span class="label">Кличка питомца:</span> {pet_name}
                </div>
                <div class="info-row">
                    <span class="label">Даты:</span> {start_date} - {end_date}
                </div>
                <div class="info-row">
                    <span class="label">Стоимость:</span> {cost} ₽
                </div>
            </div>
            <div class="footer">
                <p>У Нас Лапки - Кинологический клуб</p>
            </div>
        </div>
    </body>
    </html>
    '''
    
    html_part = MIMEText(html_content, 'html')
    msg.attach(html_part)
    
    server = smtplib.SMTP(smtp_host, smtp_port)
    server.starttls()
    server.login(smtp_user, smtp_password)
    server.send_message(msg)
    server.quit()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': True, 'message': 'Email sent successfully'}),
        'isBase64Encoded': False
    }
