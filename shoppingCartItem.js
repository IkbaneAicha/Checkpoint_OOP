class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price for this item
    getTotalPrice() {
        return (this.product.price * this.quantity).toFixed(2);
    }
}
