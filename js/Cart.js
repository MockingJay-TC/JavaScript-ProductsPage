class Cart {
    items = []

    addToCart(product) {

        product.orders += 1;
        this.items.push(product);
        addColors();

    }
    renderCart() {
        cart.innerHTML = `  
                    <button class="click">
                    <i class="fas fa-shopping-cart"></i>
                    <put>(<pin id="ins">${this.items.length}</pin>)</put>
                    </button>
                    `;
        navbar.append(cart);

    }
    removeFromCart(product) {
        const itemInCart = this.findProductInCart(product);
        if (itemInCart !== null) {
            this.items = this.items.filter(item => {
                return item.id !== itemInCart.id;
            })
            product.stock += product.orders;
            product.orders = 0;
        } else {
            alert("No Items of this Product in Cart");
        }
        console.log(this.items);
        addColors();

    }
    findProductInCart(product) {
        for (const item of this.items) {
            if (item.id === product.id) {
                return item;
            }
        }
        return null;

    }
}
//Victor.Aremu