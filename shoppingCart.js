class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(product, quantity) {
        const item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove an item from the cart by product id
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Get the total price of all items in the cart
    getTotal() {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2);
    }
}
