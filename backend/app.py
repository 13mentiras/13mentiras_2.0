from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app, origins=[
    "https://tu-usuario.github.io",  # Cambiar por tu dominio de GitHub Pages
    "http://localhost:3000",  # Para desarrollo local
    "http://127.0.0.1:5500"   # Para Live Server
])

# Contador de pedidos (en producción usarías una base de datos)
order_counter = 0

# Configuración del email (usando Gmail SMTP)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USER = os.environ.get('EMAIL_USER', "tu_email@gmail.com")
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD', "tu_password_de_aplicacion")
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', "alvarodmfk3@gmail.com")

def send_order_email(order_data, order_number):
    """Envía el email con los detalles del pedido"""
    try:
        # Crear mensaje
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = ADMIN_EMAIL
        msg['Subject'] = f"Nuevo Pedido #{order_number} - 13 MENTIRAS"
        
        # Crear contenido del email
        html_content = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; margin: 20px; }}
                .header {{ background-color: #000; color: white; padding: 20px; text-align: center; }}
                .order-info {{ background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px; }}
                .product-item {{ border-bottom: 1px solid #ddd; padding: 10px 0; }}
                .total {{ font-weight: bold; font-size: 18px; margin-top: 20px; }}
                .customer-info {{ background-color: #e8f4f8; padding: 15px; margin: 20px 0; border-radius: 5px; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>13 MENTIRAS</h1>
                <h2>Nuevo Pedido #{order_number}</h2>
                <p>Fecha: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}</p>
            </div>
            
            <div class="customer-info">
                <h3>Información del Cliente:</h3>
                <p><strong>Nombre:</strong> {order_data.get('customerName', 'No especificado')}</p>
                <p><strong>Email:</strong> {order_data.get('customerEmail', 'No especificado')}</p>
                <p><strong>Teléfono:</strong> {order_data.get('customerPhone', 'No especificado')}</p>
                <p><strong>Dirección:</strong> {order_data.get('customerAddress', 'No especificado')}</p>
            </div>
            
            <div class="order-info">
                <h3>Productos del Pedido:</h3>
        """
        
        total = 0
        for item in order_data['items']:
            item_total = item['price'] * item['quantity']
            total += item_total
            html_content += f"""
                <div class="product-item">
                    <p><strong>{item['name']}</strong></p>
                    <p>Talla: {item['size']} | Cantidad: {item['quantity']} | Precio: €{item['price']} | Subtotal: €{item_total}</p>
                </div>
            """
        
        html_content += f"""
                <div class="total">
                    <p>Total del Pedido: €{total:.2f}</p>
                </div>
            </div>
            
            <div class="order-info">
                <h3>Detalles del Pedido:</h3>
                <p><strong>Número de Pedido:</strong> #{order_number}</p>
                <p><strong>Fecha y Hora:</strong> {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}</p>
                <p><strong>Total de Productos:</strong> {sum(item['quantity'] for item in order_data['items'])}</p>
            </div>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(html_content, 'html'))
        
        # Enviar email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, ADMIN_EMAIL, text)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Error enviando email: {e}")
        return False

@app.route('/api/checkout', methods=['POST'])
def checkout():
    """Endpoint para procesar el checkout"""
    global order_counter
    
    try:
        data = request.get_json()
        
        # Validar datos requeridos
        if not data or 'items' not in data or not data['items']:
            return jsonify({'error': 'No hay productos en el carrito'}), 400
        
        # Incrementar contador de pedidos
        order_counter += 1
        order_number = order_counter
        
        # Enviar email
        email_sent = send_order_email(data, order_number)
        
        if email_sent:
            return jsonify({
                'success': True,
                'message': f'Pedido #{order_number} procesado correctamente',
                'orderNumber': order_number
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Error al enviar el email de confirmación'
            }), 500
            
    except Exception as e:
        return jsonify({'error': f'Error interno del servidor: {str(e)}'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Endpoint para verificar que el servidor está funcionando"""
    return jsonify({'status': 'OK', 'message': 'Servidor funcionando correctamente'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
