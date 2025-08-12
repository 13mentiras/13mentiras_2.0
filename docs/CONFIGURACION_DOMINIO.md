# 🌐 Configuración del Dominio Personalizado - 13 MENTIRAS

## 📝 **Información del Dominio**

### **Dominio Principal**
- **URL**: `13mentiras.com`
- **Propietario**: 13mentiras
- **Registrador**: [Especificar tu registrador de dominio]

## 🔧 **Configuración DNS para GitHub Pages**

### **Registros DNS Necesarios**

#### **Opción 1: Configuración Apex (Recomendada)**
```
Tipo: A
Nombre: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nombre: @
Valor: 185.199.111.153
TTL: 3600
```

#### **Opción 2: Configuración CNAME (Alternativa)**
```
Tipo: CNAME
Nombre: www
Valor: 13mentiras.github.io
TTL: 3600
```

### **Verificación de Configuración**
- **Propagación DNS**: Puede tardar hasta 24-48 horas
- **Herramientas de verificación**: 
  - [whatsmydns.net](https://whatsmydns.net)
  - [dnschecker.org](https://dnschecker.org)

## 🚀 **Configuración en GitHub**

### **1. Repositorio**
- **Nombre**: `13mentiras_2.0`
- **Usuario**: `13mentiras`
- **URL**: `https://github.com/13mentiras/13mentiras_2.0`

### **2. GitHub Pages**
- **Source**: Deploy from a branch
- **Branch**: `gh-pages` (creado automáticamente por GitHub Actions)
- **Folder**: `/ (root)`
- **Custom domain**: `13mentiras.com`
- **Enforce HTTPS**: ✅ Activado

### **3. GitHub Actions**
- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push a `main` branch
- **Deployment**: Automático a `gh-pages`

## 📁 **Archivos de Configuración**

### **CNAME**
```
frontend/CNAME
13mentiras.com
```

### **Workflow de GitHub Actions**
```
.github/workflows/deploy.yml
```

### **README Principal**
```
README.md
- URLs de producción actualizadas
- Enlaces a GitHub Pages y dominio personalizado
```

## ✅ **Pasos de Verificación**

### **1. Configuración DNS**
- [ ] Registrar los registros A en tu proveedor de DNS
- [ ] Verificar propagación con herramientas online
- [ ] Confirmar que apuntan a las IPs de GitHub

### **2. Configuración GitHub**
- [ ] Repositorio creado y configurado
- [ ] GitHub Pages habilitado
- [ ] Dominio personalizado configurado
- [ ] HTTPS habilitado

### **3. Deployment**
- [ ] Primer commit y push realizado
- [ ] GitHub Actions ejecutándose correctamente
- [ ] Branch `gh-pages` creado automáticamente
- [ ] Sitio accesible en el dominio personalizado

## 🚨 **Solución de Problemas Comunes**

### **Dominio No Funciona**
1. **Verificar DNS**: Usar herramientas de verificación
2. **Esperar propagación**: Hasta 48 horas
3. **Verificar GitHub**: Configuración correcta en Settings > Pages

### **HTTPS No Funciona**
1. **Verificar CNAME**: Archivo presente en el repositorio
2. **Esperar certificado**: GitHub genera certificados SSL automáticamente
3. **Verificar configuración**: Enforce HTTPS activado

### **Deployment Falla**
1. **Verificar Actions**: Revisar logs en GitHub Actions
2. **Verificar permisos**: Repositorio público o GitHub Pro
3. **Verificar workflow**: Archivo YAML correcto

## 📞 **Soporte**

### **Recursos Útiles**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### **Contacto**
- **GitHub**: [@13mentiras](https://github.com/13mentiras)
- **Proyecto**: [13mentiras_2.0](https://github.com/13mentiras/13mentiras_2.0)

La configuración del dominio personalizado está lista para ser implementada una vez que se complete el deployment en GitHub Pages.
