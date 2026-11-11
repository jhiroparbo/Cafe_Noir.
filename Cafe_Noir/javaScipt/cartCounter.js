function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cafeCart")) || [];
    let count = 0;

    for (let i = 0; i < cart.length; i++) {
        count += Number(cart[i].quantity);
    }

    let cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }
}

updateCartCount();