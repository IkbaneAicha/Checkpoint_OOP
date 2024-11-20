// Create luxury products (rings, watches, necklaces)
const ring = new Product(1, "Luxury Ring", 500);
const watch = new Product(2, "Golden Watch", 1500);
const necklace = new Product(3, "Diamond Necklace", 2500);

// Create the shopping cart
const cart = new ShoppingCart();

// Add item to cart
function addItemToCart(productName) {
    if (productName === 'ring') {
        cart.addItem(ring, 1);
    } else if (productName === 'watch') {
        cart.addItem(watch, 1);
    } else if (productName === 'necklace') {
        cart.addItem(necklace, 1);
    }
    displayCart();
}

// Remove an item from the cart
function removeItemFromCart(productId) {
    cart.removeItem(productId);
    displayCart();
}

// Display the cart content dynamically in HTML
function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('total');
    cartItemsDiv.innerHTML = ''; // Clear previous cart items

    if (cart.items.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.items.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <span>${item.product.name} x ${item.quantity} - $${item.getTotalPrice()}</span>
                <button class="remove-btn" onclick="removeItemFromCart(${item.product.id})">Remove</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
        });
    }

    totalDiv.innerHTML = `Total: $${cart.getTotal()}`;
}
