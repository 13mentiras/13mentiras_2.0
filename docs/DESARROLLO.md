# 🚀 Guía de Desarrollo - 13 MENTIRAS

## 📁 **Estructura del Proyecto Reorganizada**

### **✅ Reorganización Completada**
- **Documentación**: Moved to `docs/`
- **Frontend**: Moved to `frontend/`
- **Backend**: Moved to `backend/`

## 🎯 **Cómo Trabajar con la Nueva Estructura**

### **1. Desarrollo Frontend**
```bash
cd frontend
# Editar archivos HTML, CSS, JS
python3 -m http.server 8000
# Abrir http://localhost:8000
```

### **2. Desarrollo Backend**
```bash
cd backend
# Editar app.py, requirements.txt
python3 app.py
# API en http://localhost:5000
```

### **3. Documentación**
```bash
cd docs
# Editar archivos .md
# La documentación se actualiza automáticamente
```

## 🔧 **Rutas de Archivos (Sin Cambios)**

### **Frontend (Funciona Correctamente)**
- **HTML**: `images/logo-nuevo.png` ✅
- **CSS**: `images/background-art.png` ✅
- **JS**: `images_web_product/Grafiti_rojo.png` ✅

### **Por Qué No Se Requieren Cambios**
- Los archivos están en la misma carpeta (`frontend/`)
- Las rutas relativas se mantienen intactas
- La funcionalidad es idéntica

## 📱 **Funcionalidades Verificadas**

### **✅ Funcionando Correctamente**
- Previsualización de productos
- Galería de imágenes
- Sistema de carrito
- Stock individual de tallas
- Previsualización inteligente con scroll
- Botón scroll-to-top
- Imagen de fondo
- Logo personalizable

### **🔍 Testing Realizado**
- Servidor funcionando en `frontend/`
- Rutas de archivos correctas
- Funcionalidad intacta

## 🚀 **Deployment y Producción**

### **Heroku (Sin Cambios)**
- El backend sigue funcionando igual
- Procfile y requirements.txt en `backend/`
- No se requieren modificaciones

### **Servidor Web**
- **Raíz del servidor**: Apuntar a `frontend/`
- **Backend**: Ejecutar desde `backend/`
- **Documentación**: Accesible desde `docs/`

## 📝 **Flujo de Trabajo Recomendado**

### **1. Desarrollo Diario**
```bash
# Terminal 1: Frontend
cd frontend
python3 -m http.server 8000

# Terminal 2: Backend (si es necesario)
cd backend
python3 app.py
```

### **2. Edición de Archivos**
- **HTML/CSS/JS**: Editar en `frontend/`
- **Python**: Editar en `backend/`
- **Documentación**: Editar en `docs/`

### **3. Testing**
- **Frontend**: http://localhost:8000
- **Backend**: http://localhost:5000
- **Funcionalidades**: Verificar todas las características

## ⚠️ **Notas Importantes**

### **Rutas de Archivos**
- **NO cambiar** las rutas en el código
- **Funcionan perfectamente** con la nueva estructura
- **Mantener** las rutas relativas existentes

### **Servidor de Desarrollo**
- **Siempre ejecutar** desde `frontend/`
- **No ejecutar** desde la raíz del proyecto
- **Verificar** que las rutas funcionen

### **Mantenimiento**
- **Documentación**: Actualizar en `docs/`
- **Código**: Desarrollar en carpetas correspondientes
- **Estructura**: Mantener organizada

## 🎯 **Ventajas de la Nueva Estructura**

### **Organización**
- **Separación clara** de responsabilidades
- **Fácil navegación** por el proyecto
- **Mantenimiento simplificado**

### **Colaboración**
- **Estructura estándar** para desarrolladores
- **Fácil onboarding** de nuevos miembros
- **Documentación accesible** y organizada

### **Escalabilidad**
- **Frontend independiente** del backend
- **Deployment separado** si es necesario
- **Fácil integración** de nuevas funcionalidades

## 🔄 **Verificación de Funcionalidad**

### **Pasos de Testing**
1. **Ejecutar** servidor desde `frontend/`
2. **Verificar** que la página se carga correctamente
3. **Probar** todas las funcionalidades
4. **Confirmar** que las imágenes se muestran
5. **Verificar** que el carrito funciona

### **Funcionalidades a Verificar**
- ✅ Previsualización de productos
- ✅ Galería de imágenes
- ✅ Sistema de carrito
- ✅ Stock de tallas
- ✅ Scroll inteligente
- ✅ Botón scroll-to-top
- ✅ Imagen de fondo
- ✅ Logo personalizable

La nueva estructura hace que el proyecto sea mucho más profesional y fácil de mantener, sin afectar la funcionalidad existente.
