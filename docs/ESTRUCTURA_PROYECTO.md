# 📁 Estructura del Proyecto - 13 MENTIRAS

## 🎯 **Reorganización Completada**

### **Antes**: Archivos desordenados en la raíz
### **Ahora**: Estructura organizada y profesional

## 📂 **Nueva Estructura de Carpetas**

```
13mentiras_2.0/
├── 📚 docs/                    # Documentación del proyecto
│   ├── README.md              # Documentación principal
│   ├── ESTRUCTURA_PROYECTO.md # Este archivo
│   ├── PREVISUALIZACION_*.md  # Documentación de funcionalidades
│   ├── MEJORAS_CARRITO.md     # Mejoras implementadas
│   ├── STOCK_TALLAS_*.md      # Sistema de tallas
│   └── ...                    # Otros archivos de documentación
├── 🎨 frontend/               # Archivos del frontend
│   ├── index.html             # Página principal HTML
│   ├── styles.css             # Estilos CSS
│   ├── script.js              # JavaScript funcional
│   ├── images/                # Imágenes generales
│   │   ├── background-art.png # Imagen de fondo
│   │   └── logo-nuevo.png     # Logo principal
│   ├── images_web_product/    # Imágenes de productos
│   │   ├── Grafiti_rojo.png   # Producto principal
│   │   ├── Grafiti_rojo2.png  # Imagen adicional
│   │   └── Grafiti_rojo3.png  # Imagen adicional
│   ├── backup_logo/           # Backup del logo original
│   └── logo*.svg              # Logos SVG originales
└── ⚙️ backend/                # Archivos del backend
    ├── app.py                 # Aplicación Flask
    ├── requirements.txt       # Dependencias Python
    └── Procfile              # Configuración Heroku
```

## 🚀 **Cómo Ejecutar el Proyecto**

### **Frontend (Desarrollo Local)**
```bash
cd frontend
python3 -m http.server 8000
# Abrir http://localhost:8000
```

### **Backend (Desarrollo Local)**
```bash
cd backend
python3 app.py
# API disponible en http://localhost:5000
```

## 🔧 **Rutas de Archivos**

### **Rutas Relativas (Funcionan Correctamente)**
- **CSS**: `images/background-art.png` ✅
- **HTML**: `images/logo-nuevo.png` ✅
- **JavaScript**: `images_web_product/Grafiti_rojo.png` ✅

### **Por Qué Funcionan**
- Los archivos HTML, CSS y JS están en la misma carpeta (`frontend/`)
- Las rutas relativas se mantienen intactas
- No se requieren cambios en el código

## 📱 **Ventajas de la Nueva Estructura**

### **Organización**
- **Separación clara** entre frontend, backend y documentación
- **Fácil navegación** por el proyecto
- **Mantenimiento simplificado**

### **Desarrollo**
- **Frontend independiente** del backend
- **Documentación centralizada** en una carpeta
- **Deployment separado** si es necesario

### **Colaboración**
- **Estructura estándar** para desarrolladores
- **Fácil onboarding** de nuevos miembros
- **Documentación accesible** y organizada

## 📝 **Archivos de Documentación**

### **Funcionalidades Principales**
- `PREVISUALIZACION_PRODUCTOS.md` - Sistema de previsualización
- `MEJORAS_CARRITO.md` - Mejoras del carrito de compras
- `NUEVAS_FUNCIONALIDADES.md` - Funcionalidades añadidas

### **Implementaciones Técnicas**
- `STOCK_TALLAS_INDIVIDUAL.md` - Sistema de stock por producto
- `EFECTO_BARRIDO_GALERIA.md` - Efectos de la galería
- `CORRECCION_CARRITO.md` - Problemas solucionados

### **Guías de Uso**
- `PRUEBA_PREVISUALIZACION.md` - Testing de funcionalidades
- `IMPLEMENTAR_NUEVO_LOGO.md` - Cambio de logo
- `EDITAR_IMAGEN.md` - Edición de imágenes

## ⚠️ **Notas Importantes**

### **Rutas de Archivos**
- **No se han modificado** las rutas en el código
- **Funcionan correctamente** con la nueva estructura
- **No se requieren cambios** adicionales

### **Deployment**
- **Heroku**: Funciona con la nueva estructura
- **Desarrollo local**: Requiere navegar a la carpeta correspondiente
- **Servidor web**: Configurar raíz en la carpeta `frontend/`

### **Mantenimiento**
- **Documentación**: Actualizar en `docs/`
- **Frontend**: Desarrollar en `frontend/`
- **Backend**: Desarrollar en `backend/`

## 🎯 **Próximos Pasos**

1. **Verificar** que todo funciona correctamente
2. **Actualizar** documentación si es necesario
3. **Configurar** servidor web para apuntar a `frontend/`
4. **Mantener** la estructura organizada

La nueva estructura hace que el proyecto sea mucho más profesional y fácil de mantener, sin afectar la funcionalidad existente.
