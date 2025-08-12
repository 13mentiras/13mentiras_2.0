# 🚀 Comandos Git Útiles - 13 MENTIRAS

## 📋 **Flujo de Trabajo Diario**

### **1. Ver Estado del Repositorio**
```bash
git status
```

### **2. Ver Cambios en Archivos Específicos**
```bash
git diff frontend/index.html
git diff frontend/styles.css
git diff frontend/script.js
```

### **3. Añadir Cambios**
```bash
# Añadir archivo específico
git add frontend/index.html

# Añadir todos los cambios
git add .

# Añadir solo archivos modificados
git add -u
```

### **4. Hacer Commit**
```bash
# Commit con mensaje descriptivo
git commit -m "🎨 Descripción del cambio realizado"

# Ejemplos de mensajes:
git commit -m "✨ Añadir nueva funcionalidad de carrito"
git commit -m "🐛 Corregir bug en previsualización"
git commit -m "🎨 Mejorar estilos del botón"
git commit -m "📱 Optimizar responsive design"
git commit -m "🔧 Refactorizar código JavaScript"
```

### **5. Subir a GitHub**
```bash
# Subir cambios
git push origin main

# O simplemente (si ya está configurado)
git push
```

## 🚀 **Comandos Rápidos (Copy & Paste)**

### **Commit y Push en un solo comando:**
```bash
git add . && git commit -m "🎨 Cambios realizados" && git push
```

### **Ver historial de commits:**
```bash
git log --oneline -10
```

### **Ver cambios del último commit:**
```bash
git show --name-only
```

## 📝 **Convenciones de Mensajes de Commit**

### **Emojis para diferentes tipos de cambios:**
- 🎨 **Mejoras visuales**: CSS, diseño, UI/UX
- ✨ **Nuevas funcionalidades**: JavaScript, características
- 🐛 **Corrección de bugs**: Arreglos, soluciones
- 📱 **Responsive**: Mobile, tablet, responsive design
- 🔧 **Refactorización**: Mejoras de código, limpieza
- 📚 **Documentación**: README, docs, comentarios
- 🚀 **Deployment**: Configuración, deployment
- ⚡ **Performance**: Optimizaciones, velocidad

### **Ejemplos de mensajes:**
```bash
git commit -m "🎨 Mejorar diseño del carrito de compras"
git commit -m "✨ Añadir funcionalidad de búsqueda de productos"
git commit -m "🐛 Corregir error en selección de tallas"
git commit -m "📱 Optimizar vista móvil de la galería"
git commit -m "🔧 Refactorizar función de previsualización"
```

## 🔄 **Flujo Completo de Trabajo**

### **Para cada cambio que hagas:**

1. **Editar archivos** (HTML, CSS, JavaScript)
2. **Ver cambios**: `git status`
3. **Añadir cambios**: `git add .`
4. **Hacer commit**: `git commit -m "🎨 Descripción"`
5. **Subir a GitHub**: `git push`

### **Comando todo en uno:**
```bash
git add . && git commit -m "🎨 Tu descripción aquí" && git push
```

## 🚨 **Comandos de Emergencia**

### **Deshacer último commit (sin push):**
```bash
git reset --soft HEAD~1
```

### **Ver qué archivos están en staging:**
```bash
git diff --cached
```

### **Deshacer cambios en archivo específico:**
```bash
git checkout -- frontend/styles.css
```

## 💡 **Consejos**

- **Haz commits frecuentes** (cada cambio significativo)
- **Usa mensajes descriptivos** que expliquen qué cambió
- **Usa emojis** para identificar rápidamente el tipo de cambio
- **Revisa antes de hacer push** con `git status` y `git diff`

¡Con estos comandos tendrás un flujo de trabajo eficiente para mantener tu repositorio siempre actualizado!
