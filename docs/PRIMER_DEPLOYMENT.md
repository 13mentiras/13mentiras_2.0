# 🚀 Primer Deployment - 13 MENTIRAS

## 📋 **Pasos para Subir a GitHub**

### **1. Crear Repositorio en GitHub**
- **URL**: https://github.com/new
- **Nombre**: `13mentiras_2.0`
- **Descripción**: Sitio web oficial de 13 MENTIRAS - X AMOR AL ARTE
- **Público**: ✅ (necesario para GitHub Pages gratuito)
- **README**: ❌ (ya tenemos uno)
- **Gitignore**: ❌ (ya tenemos uno)
- **Licencia**: Elegir la que prefieras

### **2. Conectar Repositorio Local**
```bash
git remote add origin https://github.com/13mentiras/13mentiras_2.0.git
git branch -M main
```

### **3. Primer Commit**
```bash
git add .
git commit -m "🎨 Initial commit: Sitio web 13 MENTIRAS 2.0

- Frontend completo con funcionalidades
- Sistema de carrito y productos
- Previsualización inteligente
- Galería de imágenes
- Stock individual de tallas
- Documentación completa
- Configuración para GitHub Pages"
```

### **4. Push a GitHub**
```bash
git push -u origin main
```

## ⚙️ **Configuración de GitHub Pages**

### **1. Ir a Settings > Pages**
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` (se creará automáticamente)
- **Folder**: `/ (root)`

### **2. Configurar Dominio Personalizado**
- **Custom domain**: `13mentiras.com`
- **Enforce HTTPS**: ✅ Activado

### **3. Verificar CNAME**
- El archivo `frontend/CNAME` debe estar en el repositorio
- GitHub debe reconocer el dominio personalizado

## 🔄 **GitHub Actions**

### **1. Verificar Workflow**
- Ir a Actions tab
- El workflow `Deploy to GitHub Pages` debe ejecutarse automáticamente
- Debe crear el branch `gh-pages`

### **2. Verificar Deployment**
- El sitio debe estar disponible en:
  - `https://13mentiras.github.io/13mentiras_2.0`
  - `https://13mentiras.com` (después de configurar DNS)

## 🌐 **Configuración DNS**

### **1. En tu Proveedor de Dominio**
- Añadir registros A con las IPs de GitHub
- Esperar propagación (24-48 horas)

### **2. Verificar**
- Usar herramientas como whatsmydns.net
- Confirmar que apunta a GitHub

## ✅ **Verificación Final**

- [ ] Repositorio creado en GitHub
- [ ] Código subido correctamente
- [ ] GitHub Pages habilitado
- [ ] Dominio personalizado configurado
- [ ] GitHub Actions ejecutándose
- [ ] Sitio accesible en GitHub Pages
- [ ] DNS configurado y propagado
- [ ] Sitio accesible en dominio personalizado

¡El proyecto estará completamente desplegado y accesible en tu dominio personalizado!
