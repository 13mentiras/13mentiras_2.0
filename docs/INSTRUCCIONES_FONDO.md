# 🎨 Implementación del Fondo Artístico - 13 MENTIRAS

## ✅ **Cambios realizados:**
- Se ha creado la carpeta `images/` para las imágenes
- Se ha implementado el CSS para el fondo artístico
- Se ha configurado una imagen única y grande como fondo
- Se ha asegurado que el contenido esté por encima de la imagen

## 🔧 **Para completar la implementación:**

### **Paso 1: Colocar la imagen**
1. Guarda tu imagen PNG en la carpeta `images/`
2. **IMPORTANTE**: Renómbrala como `background-art.png`

### **Paso 2: Verificar la estructura**
Tu proyecto debería tener esta estructura:
```
13mentiras_2.0/
├── images/
│   ├── README.md
│   └── background-art.png  ← AQUÍ VA TU IMAGEN
├── index.html
├── styles.css
└── ... otros archivos
```

## 🎯 **Efecto implementado:**

### **Imagen única y grande:**
- Una sola imagen centrada como fondo
- Tamaño grande (800px de ancho en desktop)
- Posicionada de manera prominente
- Opacidad ajustada (50% - muy visible para máximo impacto visual)
- **IMPORTANTE**: Para eliminar el fondo blanco, la imagen PNG debe ser editada

### **Características técnicas:**
- **Posición**: `fixed` para que se mantenga al hacer scroll
- **Z-index**: `-1` para estar detrás del contenido
- **Opacidad**: 15% para mantener el efecto sutil
- **Tamaño**: 800px de ancho (responsive)
- **Filtros básicos**: 
  - `brightness(0.6)`: Oscurece ligeramente la imagen
  - `contrast(1.2)`: Aumenta ligeramente el contraste
- **Solución para fondo blanco**: Ver archivo `EDITAR_IMAGEN.md`

## 📱 **Responsive:**
- **Desktop (>1200px)**: 800px de ancho
- **Tablet (≤1200px)**: 600px de ancho
- **Tablet (≤768px)**: 500px de ancho
- **Móvil (≤480px)**: 400px de ancho

## 🚀 **Resultado final:**
Una vez que coloques la imagen `background-art.png`, tu página web "13 MENTIRAS" tendrá:
- Un fondo artístico sutil y elegante
- Una imagen única y grande centrada
- El contenido principal perfectamente legible por encima
- Un efecto visual que complementa tu diseño

## ⚠️ **Nota importante:**
La imagen está configurada con `pointer-events: none`, lo que significa que no interferirá con la funcionalidad de tu página web.
