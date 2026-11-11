let cart = JSON.parse(localStorage.getItem("cafeCart")) || [];

/* DISPLAY CART */
function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <p>Your cart is empty.</p>`;
    }

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let subtotal = item.price * item.quantity;
        total += subtotal;

        let div = document.createElement("div");
        div.className = "cart-item";

        /* PRODUCT NAME */

        let name = document.createElement("h3");
        name.textContent = item.name;

        /* SIZE */

        let size = document.createElement("p");
        size.textContent = "Size: " + item.size;

        /* PRICE */

        let price = document.createElement("p");
        price.textContent = "₱" + item.price.toFixed(2);

        /* QUANTITY */

        let quantityButtons = document.createElement("div");
        quantityButtons.className = "quantity-buttons";

        let minus = document.createElement("button");
        minus.textContent = "-";
        minus.onclick = function() {
            changeQuantity(i, -1);
        };

        let quantity = document.createElement("span");
        quantity.textContent = "Quantity: " + item.quantity;

        let plus = document.createElement("button");
        plus.textContent = "+";
        plus.onclick = function() {
            changeQuantity(i, 1);
        };

        quantityButtons.appendChild(minus);
        quantityButtons.appendChild(quantity);
        quantityButtons.appendChild(plus);

        /* SUBTOTAL */

        let subtotalText = document.createElement("p");
        subtotalText.textContent = "Subtotal: ₱" + subtotal.toFixed(2);

        /* REMOVE */

        let remove = document.createElement("button");
        remove.className = "remove-btn";
        remove.textContent = "REMOVE";

        remove.onclick = function() {
            removeItem(i);
        };

        /* ARRANGEMENT */

        div.appendChild(name);
        div.appendChild(size);
        div.appendChild(price);
        div.appendChild(quantityButtons);
        div.appendChild(subtotalText);
        div.appendChild(remove);

        cartItems.appendChild(div);
    }

    document.getElementById("total").textContent =
        "₱" + total.toFixed(2);

    updateCartCount();
}

/* CHANGE QUANTITY */

function changeQuantity(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    localStorage.setItem("cafeCart", JSON.stringify(cart));
    displayCart();
}

/* REMOVE ITEM */

function removeItem(index) {

    let confirmRemove = confirm("Are you sure you want to remove this item from your cart?");

    if (confirmRemove) {
        cart.splice(index, 1);

        localStorage.setItem("cafeCart", JSON.stringify(cart));
        displayCart();

        alert("Item successfully removed from your cart!");
    }
}

/* CHECKOUT */

document.getElementById("checkoutButton").onclick = function() {

    if (cart.length === 0) {
        alert("Your cart is empty! Please add an item first.");
    } else {

        let confirmCheckout = confirm("Do you want to proceed to checkout?");

        if (confirmCheckout) {
            window.location.href = "checkout.html";
        }

    }

};

/* DISPLAY CART */
displayCart();