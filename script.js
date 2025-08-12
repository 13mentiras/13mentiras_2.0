// Datos de productos con múltiples imágenes y stock individual de tallas
const productsData = {
    1: {
        name: "DUALIDAD TELA DE ARAÑA",
        price: 15,
        originalPrice: 45,
        images: [
            "images_web_product/Dualidad_telaraña.png",
            "images_web_product/Dualidad_telaraña2.png",
            "images_web_product/Dualidad_telaraña3.png"
        ],
        soldOut: false,
        description: "Diseño de dualidad artística con patrón de tela de araña único.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: true },
            "3XL": { available: true },
            "4XL": { available: true },
            "5XL": { available: true }
        }
    },
    2: {
        name: "DUALIDAD GRAFITTI ROJO",
        price: 15,
        originalPrice: 35,
        images: [
            "images_web_product/Grafiti_rojo.png",
            "images_web_product/Grafiti_rojo2.png",
            "images_web_product/Grafiti_rojo3.png"
        ],
        soldOut: false,
        description: "Diseño de grafitti rojo con dualidad artística y estilo urbano.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: false },
            "3XL": { available: false },
            "4XL": { available: false },
            "5XL": { available: true }
        }
    },
    3: {
        name: "DUALIDAD X AMOR AL ARTE",
        price: 15,
        originalPrice: 30,
        images: [
            "images_web_product/Dualidad_X_AMOR_AL_ARTE.png",
            "images_web_product/Dualidad_X_AMOR_AL_ARTE2.png",
            "images_web_product/Dualidad_X_AMOR_AL_ARTE3.png"
        ],
        soldOut: false,
        description: "Diseño de dualidad artística con el lema 'X AMOR AL ARTE'.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: true },
            "3XL": { available: true },
            "4XL": { available: true },
            "5XL": { available: true }
        }
    },
    4: {
        name: "CAMISETA VINTAGE",
        price: 50,
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=600&fit=crop"
        ],
        soldOut: true,
        description: "Diseño retro con acabado vintage y materiales premium.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: true },
            "3XL": { available: true },
            "4XL": { available: true },
            "5XL": { available: true }
        }
    },
    5: {
        name: "CAMISETA GEOMÉTRICA",
        price: 38,
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
        ],
        soldOut: false,
        description: "Patrones geométricos modernos con colores contrastantes.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: true },
            "3XL": { available: true },
            "4XL": { available: true },
            "5XL": { available: true }
        }
    },
    6: {
        name: "CAMISETA ARTÍSTICA",
        price: 42,
        images: [
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=600&fit=crop"
        ],
        soldOut: false,
        description: "Obra de arte portátil con técnicas de impresión avanzadas.",
        sizes: {
            S: { available: true },
            M: { available: true },
            L: { available: true },
            XL: { available: true },
            "2XL": { available: true },
            "3XL": { available: true },
            "4XL": { available: true },
            "5XL": { available: true }
        }
    }
};

// Carrito de compras
let cart = [];
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const cartDropdown = document.getElementById('cartDropdown');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');



// Función para actualizar el contador del carrito
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
}

// Función para actualizar el carrito en la UI
function updateCartUI() {
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        

        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Talla: ${item.size}</p>
                <p class="cart-item-price">€${item.price}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})" title="Eliminar del carrito">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `€${total.toFixed(2)}`;
}

// Función para añadir producto al carrito
function addToCart(productId, selectedSize) {
    const product = productsData[productId];
    if (!product || product.soldOut) return;
    
    if (!selectedSize) {
        showNotification('Por favor selecciona una talla');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: selectedSize,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartUI();
    showNotification(`${product.name} (Talla ${selectedSize}) añadida al carrito`);
}

// Función para actualizar cantidad
function updateQuantity(index, change) {
    const item = cart[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        updateCartCount();
        updateCartUI();
        
        // No abrir automáticamente el carrito, solo mantenerlo abierto si ya lo está
    }
}

// Función para eliminar del carrito
function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCartCount();
    updateCartUI();
    showNotification(`${item.name} eliminada del carrito`);
    
    // No abrir automáticamente el carrito, solo mantenerlo abierto si ya lo está
}

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #333;
        color: #ffffff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border: 1px solid #555;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para abrir vista detallada del producto con galería
function openProductDetail(productId) {
    const product = productsData[productId];
    if (!product) return;
    
    let currentImageIndex = 0;
    let previousImageIndex = 0;
    let selectedSize = null;
    
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    function updateMainImage() {
        const mainImage = modal.querySelector('.gallery-main-image');
        
        // Cambiar la imagen directamente sin efectos
        mainImage.src = product.images[currentImageIndex];
        
        // Actualizar el onclick para la nueva imagen
        mainImage.onclick = () => openFullscreen(product.images[currentImageIndex], `${product.name} - Vista ${currentImageIndex + 1}`);
        
        // Actualizar thumbnails activos
        const thumbnails = modal.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
        
        // Guardar el índice anterior para futuras referencias
        previousImageIndex = currentImageIndex;
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
        updateMainImage();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
        updateMainImage();
    }
    
    function updateAddToCartButton() {
        const addToCartBtn = modal.querySelector('.add-to-cart-btn');
        if (selectedSize) {
            addToCartBtn.disabled = false;
            addToCartBtn.textContent = `Añadir al Carrito - Talla ${selectedSize}`;
        } else {
            addToCartBtn.disabled = true;
            addToCartBtn.textContent = 'Selecciona una talla';
        }
    }
    
    // Contenido del modal
    modal.innerHTML = `
        <div class="modal-content" style="
            background-color: #111111;
            border: 1px solid #333;
            border-radius: 12px;
            max-width: 900px;
            width: 95%;
            max-height: 95vh;
            overflow-y: auto;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        ">
            <button class="close-modal" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.5);
            ">&times;</button>
            
            <div class="product-gallery" style="
                position: relative;
                width: 100%;
                height: 500px;
                overflow: hidden;
                border-radius: 12px 12px 0 0;
            ">
                <img class="gallery-main-image" src="${product.images[0]}" alt="${product.name}" style="
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    background-color: #0a0a0a;
                    cursor: pointer;
                " onclick="openFullscreen('${product.images[0]}', '${product.name} - Vista principal')">
                
                ${product.soldOut ? '<div class="sold-out-large" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, 0.9); color: #ffffff; padding: 0.8rem 1.5rem; font-weight: 700; font-size: 1rem; letter-spacing: 0.1em; text-transform: uppercase; border: 2px solid #ffffff; z-index: 10;">AGOTADO</div>' : ''}
                
                <button class="gallery-nav gallery-prev" style="
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.7);
                    color: #ffffff;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    transition: background-color 0.3s ease;
                ">&lt;</button>
                
                <button class="gallery-nav gallery-next" style="
                    position: absolute;
                    top: 50%;
                    right: 20px;
                    transform: translateY(-50%);
                    background: rgba(0, 0, 0, 0.7);
                    color: #ffffff;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    transition: background-color 0.3s ease;
                ">&gt;</button>
                
                <div class="gallery-thumbnails" style="
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 10px;
                    z-index: 10;
                ">
                    ${product.images.map((image, index) => `
                        <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" style="
                            width: 60px;
                            height: 60px;
                            border-radius: 8px;
                            overflow: hidden;
                            cursor: pointer;
                            border: 2px solid ${index === 0 ? '#ffffff' : 'transparent'};
                            transition: border-color 0.3s ease;
                            background-color: #0a0a0a;
                        ">
                            <img src="${image}" alt="Vista ${index + 1}" style="
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            ">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-details" style="padding: 2rem;">
                <h2 style="
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #ffffff;
                ">${product.name}</h2>
                
                <p class="price-large" style="
                    font-size: 2rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 1.5rem;
                ">€${product.price}${product.originalPrice ? `<span style="font-size: 1.2rem; color: #ff4444; text-decoration: line-through; margin-left: 0.5rem; opacity: 0.8;">€${product.originalPrice}</span>` : ''}</p>
                
                <div class="product-description" style="
                    color: #cccccc;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                ">
                    <p>${product.description}</p>
                    <p><strong>Material:</strong> 100% Algodón orgánico</p>
                    <p><strong>Envío:</strong> Gratis en pedidos superiores a €50</p>
                </div>
                
                ${!product.soldOut ? `
                    <div class="size-selector">
                        <label>Talla:</label>
                        <div class="size-options">
                            ${Object.entries(product.sizes).map(([size, sizeInfo]) => `
                                <button class="size-option ${!sizeInfo.available ? 'out-of-stock' : ''}" 
                                        data-size="${size}" 
                                        ${!sizeInfo.available ? 'disabled' : ''}>
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <button class="add-to-cart-btn" disabled style="
                        background-color: #333;
                        color: #666;
                        border: none;
                        padding: 1rem 2rem;
                        font-size: 1rem;
                        font-weight: 600;
                        border-radius: 8px;
                        cursor: not-allowed;
                        width: 100%;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        transition: background-color 0.3s ease;
                        margin-top: 1rem;
                    ">Selecciona una talla</button>
                ` : `
                    <button class="sold-out-btn" style="
                        background-color: #333;
                        color: #666;
                        border: none;
                        padding: 1rem 2rem;
                        font-size: 1rem;
                        font-weight: 600;
                        border-radius: 8px;
                        cursor: not-allowed;
                        width: 100%;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                    " disabled>Producto Agotado</button>
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Event listeners para navegación de galería
    const prevBtn = modal.querySelector('.gallery-prev');
    const nextBtn = modal.querySelector('.gallery-next');
    const thumbnails = modal.querySelectorAll('.gallery-thumbnail');
    
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateMainImage();
        });
    });
    
    // Event listeners para selector de tallas
    if (!product.soldOut) {
        const sizeOptions = modal.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Verificar si la talla está fuera de stock
                if (option.classList.contains('out-of-stock')) {
                    console.log('Talla fuera de stock seleccionada:', option.getAttribute('data-size'));
                    return; // No permitir selección
                }
                
                // Remover selección anterior
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                // Seleccionar nueva talla
                option.classList.add('selected');
                selectedSize = option.getAttribute('data-size');
                updateAddToCartButton();
            });
        });
    }
    
    // Funcionalidad del botón cerrar
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Funcionalidad del botón añadir al carrito
    if (!product.soldOut) {
        const addToCartBtn = modal.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            addToCart(productId, selectedSize);
            closeModal(modal);
            // No abrir automáticamente el carrito
        });
        
        addToCartBtn.addEventListener('mouseenter', () => {
            if (!addToCartBtn.disabled) {
                addToCartBtn.style.backgroundColor = '#cccccc';
            }
        });
        
        addToCartBtn.addEventListener('mouseleave', () => {
            if (!addToCartBtn.disabled) {
                addToCartBtn.style.backgroundColor = '#ffffff';
            }
        });
    }
    
    // Cerrar con ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Función para cerrar modal
function closeModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.8)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Función para mostrar opciones de correo
function showEmailOptions() {
    const modal = document.createElement('div');
    modal.className = 'email-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="email-content" style="
            background-color: #111111;
            border: 1px solid #333;
            border-radius: 12px;
            max-width: 500px;
            width: 95%;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        ">
            <button class="close-email" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.5);
            ">&times;</button>
            
            <div style="padding: 2rem;">
                <h2 style="
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #ffffff;
                    text-align: center;
                ">Contactar por Email</h2>
                
                <p style="
                    color: #cccccc;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                ">Elige el departamento al que quieres escribir:</p>
                
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <button class="email-option" data-email="soporte@13mentiras.com" style="
                        background-color: #333;
                        color: #ffffff;
                        border: 1px solid #555;
                        padding: 1.5rem;
                        border-radius: 8px;
                        cursor: pointer;
                        text-align: left;
                        transition: all 0.3s ease;
                        font-size: 1rem;
                    ">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <i class="fas fa-headset" style="font-size: 1.5rem; color: #ffffff;"></i>
                            <div>
                                <h3 style="margin: 0; font-size: 1.2rem; font-weight: 600;">Soporte Técnico</h3>
                                <p style="margin: 0.5rem 0 0 0; color: #cccccc; font-size: 0.9rem;">soporte@13mentiras.com</p>
                                <p style="margin: 0.5rem 0 0 0; color: #cccccc; font-size: 0.8rem;">Problemas con pedidos, devoluciones, etc.</p>
                            </div>
                        </div>
                    </button>
                    
                    <button class="email-option" data-email="contacto@13mentiras.com" style="
                        background-color: #333;
                        color: #ffffff;
                        border: 1px solid #555;
                        padding: 1.5rem;
                        border-radius: 8px;
                        cursor: pointer;
                        text-align: left;
                        transition: all 0.3s ease;
                        font-size: 1rem;
                    ">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <i class="fas fa-envelope" style="font-size: 1.5rem; color: #ffffff;"></i>
                            <div>
                                <h3 style="margin: 0; font-size: 1.2rem; font-weight: 600;">Contacto General</h3>
                                <p style="margin: 0.5rem 0 0 0; color: #cccccc; font-size: 0.9rem;">contacto@13mentiras.com</p>
                                <p style="margin: 0.5rem 0 0 0; color: #cccccc; font-size: 0.8rem;">Consultas generales, colaboraciones, etc.</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        const modalContent = modal.querySelector('.email-content');
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Event listeners
    const closeBtn = modal.querySelector('.close-email');
    const emailOptions = modal.querySelectorAll('.email-option');
    
    closeBtn.addEventListener('click', () => {
        closeEmailModal(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeEmailModal(modal);
        }
    });
    
    emailOptions.forEach(option => {
        option.addEventListener('click', () => {
            const email = option.getAttribute('data-email');
            openEmailClient(email);
            closeEmailModal(modal);
        });
        
        // Efectos hover
        option.addEventListener('mouseenter', () => {
            option.style.backgroundColor = '#444';
            option.style.borderColor = '#666';
        });
        
        option.addEventListener('mouseleave', () => {
            option.style.backgroundColor = '#333';
            option.style.borderColor = '#555';
        });
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            closeEmailModal(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Función para abrir el cliente de correo
function openEmailClient(email) {
    const subject = encodeURIComponent('Consulta - 13 MENTIRAS');
    const body = encodeURIComponent(`Hola,\n\nMe gustaría hacer una consulta sobre sus productos.\n\nSaludos cordiales.`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Intentar abrir el cliente de correo
    window.open(mailtoLink, '_blank');
    
    // Mostrar notificación
    showNotification(`Abriendo correo para ${email}`);
}

// Función para cerrar modal de email
function closeEmailModal(modal) {
    const modalContent = modal.querySelector('.email-content');
    modalContent.style.transform = 'scale(0.8)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// Funcionalidad del carrito desplegable
function toggleCart() {
    cartDropdown.classList.toggle('open');
}

function closeCart() {
    cartDropdown.classList.remove('open');
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners para el carrito
    const cartIcon = document.getElementById('cartIcon');
    const closeCartBtn = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', closeCart);
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('El carrito está vacío');
            return;
        }
        showCheckoutForm();
    });
    
    // Event listeners para productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            openProductDetail(productId);
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
    });
    
    // Navegación suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Event listener específico para el logo
    const logoLink = document.querySelector('.brand-text');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Cerrar carrito al hacer clic fuera
    document.addEventListener('click', (e) => {
        // No cerrar si el clic es en el carrito o en el icono del carrito
        if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
            // Verificar que el clic no sea en botones internos del carrito
            const isCartButton = e.target.closest('.cart-item-quantity button') || 
                                e.target.closest('.remove-item') ||
                                e.target.closest('.cart-footer button');
            
            if (!isCartButton) {
                closeCart();
            }
        }
    });
    
    // Inicializar UI del carrito
    updateCartUI();
    
    // Event listener para el icono de correo
    const emailContact = document.getElementById('emailContact');
    if (emailContact) {
        emailContact.addEventListener('click', showEmailOptions);
    }
    
    // Event listener para previsualización
    document.addEventListener('scroll', handleScroll);

});

// Función para mostrar el formulario de checkout
function showCheckoutForm() {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    modal.innerHTML = `
        <div class="checkout-content" style="
            background-color: #111111;
            border: 1px solid #333;
            border-radius: 12px;
            max-width: 600px;
            width: 95%;
            max-height: 95vh;
            overflow-y: auto;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        ">
            <button class="close-checkout" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.5);
            ">&times;</button>
            
            <div style="padding: 2rem;">
                <h2 style="
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    color: #ffffff;
                    text-align: center;
                ">Finalizar Compra</h2>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: #ffffff; margin-bottom: 1rem;">Resumen del Pedido:</h3>
                    ${cart.map(item => `
                        <div style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0.5rem 0;
                            border-bottom: 1px solid #333;
                        ">
                            <div>
                                <p style="color: #ffffff; margin: 0;">${item.name} (${item.size})</p>
                                <p style="color: #cccccc; margin: 0; font-size: 0.9rem;">Cantidad: ${item.quantity}</p>
                            </div>
                            <p style="color: #ffffff; margin: 0;">€${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    `).join('')}
                    <div style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1rem 0;
                        border-top: 2px solid #ffffff;
                        margin-top: 1rem;
                    ">
                        <h4 style="color: #ffffff; margin: 0;">Total:</h4>
                        <h4 style="color: #ffffff; margin: 0;">€${total.toFixed(2)}</h4>
                    </div>
                </div>
                
                <form id="checkoutForm" style="margin-top: 2rem;">
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; color: #ffffff; margin-bottom: 0.5rem;">Nombre completo *</label>
                        <input type="text" name="customerName" required style="
                            width: 100%;
                            padding: 0.8rem;
                            border: 1px solid #333;
                            border-radius: 4px;
                            background-color: #0a0a0a;
                            color: #ffffff;
                            font-size: 1rem;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; color: #ffffff; margin-bottom: 0.5rem;">Email *</label>
                        <input type="email" name="customerEmail" required style="
                            width: 100%;
                            padding: 0.8rem;
                            border: 1px solid #333;
                            border-radius: 4px;
                            background-color: #0a0a0a;
                            color: #ffffff;
                            font-size: 1rem;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; color: #ffffff; margin-bottom: 0.5rem;">Teléfono *</label>
                        <input type="tel" name="customerPhone" required style="
                            width: 100%;
                            padding: 0.8rem;
                            border: 1px solid #333;
                            border-radius: 4px;
                            background-color: #0a0a0a;
                            color: #ffffff;
                            font-size: 1rem;
                        ">
                    </div>
                    
                    <div style="margin-bottom: 2rem;">
                        <label style="display: block; color: #ffffff; margin-bottom: 0.5rem;">Dirección de envío *</label>
                        <textarea name="customerAddress" required rows="3" style="
                            width: 100%;
                            padding: 0.8rem;
                            border: 1px solid #333;
                            border-radius: 4px;
                            background-color: #0a0a0a;
                            color: #ffffff;
                            font-size: 1rem;
                            resize: vertical;
                        "></textarea>
                    </div>
                    
                    <button type="submit" style="
                        width: 100%;
                        background-color: #ffffff;
                        color: #000000;
                        border: none;
                        padding: 1rem;
                        font-size: 1rem;
                        font-weight: 600;
                        border-radius: 8px;
                        cursor: pointer;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        transition: background-color 0.3s ease;
                    ">Confirmar Pedido</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        const modalContent = modal.querySelector('.checkout-content');
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Event listeners
    const closeBtn = modal.querySelector('.close-checkout');
    const form = modal.querySelector('#checkoutForm');
    
    closeBtn.addEventListener('click', () => {
        closeCheckoutModal(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCheckoutModal(modal);
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        processCheckout(modal);
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            closeCheckoutModal(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Función para procesar el checkout
async function processCheckout(modal) {
    const form = modal.querySelector('#checkoutForm');
    const formData = new FormData(form);
    
    const orderData = {
        customerName: formData.get('customerName'),
        customerEmail: formData.get('customerEmail'),
        customerPhone: formData.get('customerPhone'),
        customerAddress: formData.get('customerAddress'),
        items: cart
    };
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Procesando...';
    submitBtn.disabled = true;
    
    try {
        // URL del backend desplegado (cambiar por tu URL real)
        const response = await fetch('https://tu-backend.onrender.com/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification(`¡Pedido #${result.orderNumber} confirmado! Revisa tu email.`);
            cart = [];
            updateCartCount();
            updateCartUI();
            closeCart();
            closeCheckoutModal(modal);
        } else {
            showNotification('Error al procesar el pedido: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error de conexión. Inténtalo de nuevo.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Función para cerrar modal de checkout
function closeCheckoutModal(modal) {
    const modalContent = modal.querySelector('.checkout-content');
    modalContent.style.transform = 'scale(0.8)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
} 

// Funcionalidad del botón "Volver arriba"
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll suave hacia arriba al hacer clic
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 

// Variables para previsualización de productos
let previewTimer = null;
let currentPreviewProduct = null;
let isScrolling = false;
let scrollTimeout = null;

// Función para iniciar timer de previsualización
function startPreviewTimer(productId) {
    // No iniciar timer si se está haciendo scroll
    if (isScrolling) {
        console.log('Scroll en progreso, no se inicia timer de previsualización');
        return;
    }
    
    console.log('Timer iniciado para producto:', productId);
    
    // Limpiar timer anterior si existe
    if (previewTimer) {
        clearTimeout(previewTimer);
    }
    
    // Iniciar nuevo timer de 2 segundos
    previewTimer = setTimeout(() => {
        console.log('Timer completado, mostrando previsualización para producto:', productId);
        showProductPreview(productId);
    }, 2000);
}

// Función para cancelar timer de previsualización
function cancelPreviewTimer() {
    console.log('Timer cancelado');
    if (previewTimer) {
        clearTimeout(previewTimer);
        previewTimer = null;
    }
}

// Función para manejar el scroll
function handleScroll() {
    isScrolling = true;
    
    // Cerrar previsualización si está abierta
    if (currentPreviewProduct) {
        console.log('Scroll detectado, cerrando previsualización');
        closeProductPreview();
    }
    
    // Limpiar timeout anterior
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Marcar que el scroll ha terminado después de 150ms de inactividad
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
        console.log('Scroll terminado, previsualización disponible');
    }, 150);
}

// Función para mostrar previsualización de producto
function showProductPreview(productId) {
    console.log('Mostrando previsualización para producto:', productId);
    const product = productsData[productId];
    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }
    
    const preview = document.getElementById('productPreview');
    if (!preview) {
        console.error('Elemento de previsualización no encontrado');
        return;
    }
    
    const previewImage = preview.querySelector('.product-preview-image');
    const previewTitle = preview.querySelector('.product-preview-info h3');
    const previewPrice = preview.querySelector('.product-preview-info .price');
    
    // Configurar contenido de la previsualización
    previewImage.src = product.images[0]; // Primera imagen del producto
    previewTitle.textContent = product.name;
    
    // Mostrar precio con descuento si existe precio original
    if (product.originalPrice) {
        previewPrice.innerHTML = `€${product.price} <span class="original-price">€${product.originalPrice}</span>`;
    } else {
        previewPrice.textContent = `€${product.price}`;
    }
    
    // Hacer la previsualización clickeable
    preview.style.cursor = 'pointer';
    preview.onclick = () => {
        console.log('Click en previsualización, abriendo modal del producto:', productId);
        closeProductPreview();
        openProductDetail(productId);
    };
    
    // Mostrar previsualización
    preview.classList.add('show');
    currentPreviewProduct = productId;
    console.log('Previsualización mostrada correctamente');
}

// Función para cerrar previsualización
function closeProductPreview() {
    console.log('Cerrando previsualización');
    const preview = document.getElementById('productPreview');
    preview.classList.remove('show');
    currentPreviewProduct = null;
}

// Hacer la función disponible globalmente
window.closeProductPreview = closeProductPreview;

// Función para cerrar previsualización al hacer clic fuera o al salir el ratón
function handlePreviewClickOutside(event) {
    const preview = document.getElementById('productPreview');
    if (preview.classList.contains('show') && !preview.contains(event.target)) {
        closeProductPreview();
    }
}

// Función para cerrar previsualización cuando el ratón sale de la previsualización
function handlePreviewMouseLeave() {
    console.log('Ratón salió de la previsualización, cerrando...');
    closeProductPreview();
}

// Funciones para vista en pantalla completa
function openFullscreen(imageSrc, imageAlt) {
    console.log('Abriendo imagen en pantalla completa:', imageSrc);
    const overlay = document.getElementById('fullscreenOverlay');
    const image = document.getElementById('fullscreenImage');
    
    image.src = imageSrc;
    image.alt = imageAlt;
    overlay.classList.add('show');
    
    // Hacer que la imagen sea clickeable para cerrar
    image.onclick = () => {
        closeFullscreen();
    };
    
    // Hacer que el overlay sea clickeable para cerrar (solo si se hace click en el fondo)
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeFullscreen();
        }
    };
}

function closeFullscreen() {
    console.log('Cerrando vista en pantalla completa');
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.classList.remove('show');
}

// Hacer la función disponible globalmente
window.closeFullscreen = closeFullscreen;

// Event listeners para previsualización
document.addEventListener('click', handlePreviewClickOutside);

// Añadir evento de mouseleave a la previsualización
document.addEventListener('DOMContentLoaded', function() {
    const preview = document.getElementById('productPreview');
    if (preview) {
        preview.addEventListener('mouseleave', handlePreviewMouseLeave);
    }
    
    console.log('DOM cargado, buscando tarjetas de productos...');
    const productCards = document.querySelectorAll('.product-card');
    console.log('Tarjetas de productos encontradas:', productCards.length);
    
    productCards.forEach((card, index) => {
        const productId = card.getAttribute('data-product-id');
        console.log(`Añadiendo eventos a tarjeta ${index + 1}, ID: ${productId}`);
        
        // Añadir eventos de previsualización
        card.addEventListener('mouseenter', () => {
            console.log(`Mouse enter en tarjeta ${productId}`);
            startPreviewTimer(productId);
        });
        
        card.addEventListener('mouseleave', () => {
            console.log(`Mouse leave en tarjeta ${productId}`);
            cancelPreviewTimer();
        });
    });
    
    console.log('Eventos de previsualización añadidos a todas las tarjetas');
}); 

 