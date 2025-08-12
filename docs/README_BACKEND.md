# Backend 13 MENTIRAS - Configuración y Despliegue

## 📋 Configuración del Email

### 1. Configurar Gmail para envío de correos

1. **Activar verificación en 2 pasos** en tu cuenta de Gmail
2. **Generar contraseña de aplicación**:
   - Ve a Configuración de Google Account
   - Seguridad → Verificación en 2 pasos → Contraseñas de aplicación
   - Genera una nueva contraseña para "Correo"
   - Copia la contraseña generada (16 caracteres)

### 2. Actualizar configuración en app.py

Edita el archivo `app.py` y cambia estas líneas:

```python
EMAIL_USER = "tu_email@gmail.com"  # Tu email de Gmail
EMAIL_PASSWORD = "tu_password_de_aplicacion"  # La contraseña de 16 caracteres
ADMIN_EMAIL = "alvarodmfk3@gmail.com"  # Ya está configurado
```

## 🚀 Despliegue Gratuito

### Opción 1: Render (Recomendado)

1. **Crear cuenta en Render**: https://render.com
2. **Conectar tu repositorio** de GitHub
3. **Crear nuevo Web Service**:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
   - Environment Variables:
     - `EMAIL_USER`: tu_email@gmail.com
     - `EMAIL_PASSWORD`: tu_password_de_aplicacion
     - `ADMIN_EMAIL`: alvarodmfk3@gmail.com

### Opción 2: Railway

1. **Crear cuenta en Railway**: https://railway.app
2. **Conectar repositorio** de GitHub
3. **Agregar variables de entorno** en la pestaña Variables

### Opción 3: Heroku

1. **Crear cuenta en Heroku**: https://heroku.com
2. **Instalar Heroku CLI**
3. **Ejecutar comandos**:
   ```bash
   heroku create tu-app-13mentiras
   git add .
   git commit -m "Initial commit"
   git push heroku main
   heroku config:set EMAIL_USER=tu_email@gmail.com
   heroku config:set EMAIL_PASSWORD=tu_password_de_aplicacion
   heroku config:set ADMIN_EMAIL=alvarodmfk3@gmail.com
   ```

## 🔧 Pruebas Locales

1. **Instalar dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Ejecutar servidor**:
   ```bash
   python app.py
   ```

3. **Probar endpoint**:
   ```bash
   curl http://localhost:5000/api/health
   ```

## 📝 Actualizar Frontend

Una vez desplegado, actualiza la URL en `script.js`:

```javascript
// Cambiar esta línea en la función processCheckout
const response = await fetch('https://tu-app.onrender.com/api/checkout', {
```

## 🔒 Seguridad

- ✅ Las contraseñas de aplicación son seguras
- ✅ CORS configurado para permitir peticiones del frontend
- ✅ Validación de datos en el backend
- ✅ Manejo de errores implementado

## 📧 Formato del Email

El email incluirá:
- Número de pedido secuencial (#1, #2, #3...)
- Información del cliente (nombre, email, teléfono, dirección)
- Lista detallada de productos con tallas y cantidades
- Total del pedido
- Fecha y hora del pedido

## 🐛 Solución de Problemas

### Error de autenticación Gmail
- Verifica que la verificación en 2 pasos esté activada
- Asegúrate de usar la contraseña de aplicación correcta

### Error CORS
- Verifica que la URL del frontend esté permitida en el backend

### Error de conexión
- Verifica que el backend esté desplegado y funcionando
- Comprueba la URL en el frontend
