# 🎨 13 MENTIRAS - X AMOR AL ARTE

## 📁 Estructura del Proyecto

```
13mentiras_2.0/
├── 📚 docs/                    # Documentación del proyecto
├── 🎨 frontend/               # Archivos del frontend
│   ├── index.html             # Página principal
│   ├── styles.css             # Estilos CSS
│   ├── script.js              # JavaScript
│   ├── images/                # Imágenes generales
│   ├── images_web_product/    # Imágenes de productos
│   ├── backup_logo/           # Backup del logo original
│   └── logo*.svg              # Logos SVG
└── ⚙️ backend/                # Archivos del backend
    ├── app.py                 # Aplicación Flask
    ├── requirements.txt       # Dependencias Python
    └── Procfile              # Configuración Heroku
```

## 🚀 Inicio Rápido

### Frontend (Desarrollo Local)
```bash
cd frontend
python3 -m http.server 8000
# Abrir http://localhost:8000
```

### Backend (Desarrollo Local)
```bash
cd backend
python3 app.py
# API disponible en http://localhost:5000
```

## 🎯 Características Principales

- **Previsualización inteligente** de productos con hover
- **Galería de imágenes** con vista en pantalla completa
- **Sistema de carrito** persistente y funcional
- **Stock individual** de tallas por producto
- **Diseño responsive** y moderno
- **Previsualización inteligente** que se adapta al scroll

## 📱 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Python Flask
- **Iconos**: FontAwesome
- **Fuentes**: Google Fonts (Rajdhani, Orbitron, Audiowide)
- **Deployment**: Heroku

## 🔧 Funcionalidades Implementadas

### Productos
- Previsualización con hover de 2 segundos
- Galería de imágenes con navegación
- Vista en pantalla completa
- Sistema de tallas con stock individual

### Carrito
- Añadir/eliminar productos
- Cambiar cantidades
- Persistencia durante operaciones
- Checkout integrado

### UX/UI
- Navegación suave
- Botón scroll-to-top
- Imagen de fondo con opacidad configurable
- Logo personalizable

## 📖 Documentación

Toda la documentación detallada se encuentra en la carpeta `docs/`:

- **Funcionalidades**: Previsualización, carrito, galería
- **Implementación**: Stock individual, mejoras del carrito
- **Correcciones**: Problemas identificados y solucionados
- **Pruebas**: Guías de testing y debugging

## 🌐 Acceso

### **Desarrollo Local**
- **Frontend**: [http://localhost:8000](http://localhost:8000)
- **Backend**: [http://localhost:5000](http://localhost:5000)

### **Producción**
- **Sitio Web**: [https://13mentiras.com](https://13mentiras.com)
- **GitHub Pages**: [https://13mentiras.github.io/13mentiras_2.0](https://13mentiras.github.io/13mentiras_2.0)

## 📝 Notas de Desarrollo

- El proyecto está organizado en carpetas separadas para mejor mantenimiento
- Todas las rutas de archivos han sido actualizadas para la nueva estructura
- La documentación está centralizada en `docs/`
- El frontend y backend están completamente separados

---

**Desarrollado con ❤️ para 13 MENTIRAS**
