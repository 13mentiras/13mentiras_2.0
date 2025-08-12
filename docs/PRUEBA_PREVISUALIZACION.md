# 🧪 Prueba de Previsualización de Productos

## 🔍 **Para probar la funcionalidad:**

### **1. Abrir la consola del navegador:**
- **Chrome/Edge**: F12 → Console
- **Firefox**: F12 → Console
- **Safari**: Desarrollar → Mostrar consola JavaScript

### **2. Verificar que los eventos se añaden:**
Deberías ver estos mensajes en la consola:
```
DOM cargado, buscando tarjetas de productos...
Tarjetas de productos encontradas: 6
Añadiendo eventos a tarjeta 1, ID: 1
Añadiendo eventos a tarjeta 2, ID: 2
Añadiendo eventos a tarjeta 3, ID: 3
Añadiendo eventos a tarjeta 4, ID: 4
Añadiendo eventos a tarjeta 5, ID: 5
Añadiendo eventos a tarjeta 6, ID: 6
Eventos de previsualización añadidos a todas las tarjetas
```

### **3. Probar la previsualización:**
- **Pasa el ratón** sobre cualquier tarjeta de producto
- **Mantén el ratón quieto** durante 2 segundos
- Deberías ver en la consola:
```
Mouse enter en tarjeta [ID]
Timer iniciado para producto: [ID]
Timer completado, mostrando previsualización para producto: [ID]
Mostrando previsualización para producto: [ID]
Previsualización mostrada correctamente
```

### **4. Si no funciona, verificar:**

#### **Problema 1: No aparecen los logs iniciales**
- El archivo `script.js` no se está cargando
- Hay un error de sintaxis en el JavaScript

#### **Problema 2: Aparecen los logs pero no la previsualización**
- Verificar que `productsData` esté definida
- Verificar que el HTML de previsualización esté presente

#### **Problema 3: La previsualización aparece pero no se ve**
- Verificar que los estilos CSS estén cargados
- Verificar que no haya conflictos de z-index

## 🚨 **Posibles problemas y soluciones:**

### **Error: "productsData is not defined"**
- Verificar que `productsData` esté definida al inicio de `script.js`
- Verificar que no haya errores de sintaxis antes de su definición

### **Error: "Elemento de previsualización no encontrado"**
- Verificar que el HTML tenga el `div` con `id="productPreview"`
- Verificar que esté antes del `</body>`

### **Error: "Producto no encontrado"**
- Verificar que `productsData` contenga los IDs correctos
- Verificar que los `data-product-id` del HTML coincidan

## 🔧 **Para depurar:**

### **Verificar que productsData esté definida:**
En la consola, escribe:
```javascript
console.log(productsData);
```

### **Verificar que el elemento de previsualización exista:**
En la consola, escribe:
```javascript
console.log(document.getElementById('productPreview'));
```

### **Verificar que las tarjetas tengan los eventos:**
En la consola, escribe:
```javascript
const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
    console.log('Tarjeta:', card);
    console.log('ID:', card.getAttribute('data-product-id'));
});
```

## 📱 **URL de prueba:**
```
http://localhost:8001
```

## ⚠️ **Notas importantes:**
- **Asegúrate de que la consola esté abierta** para ver los logs
- **Espera 2 segundos completos** sin mover el ratón
- **Verifica que no haya errores** en la consola
- **Recarga la página** si haces cambios en el código
