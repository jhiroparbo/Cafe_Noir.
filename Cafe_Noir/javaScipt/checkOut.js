
/* GET ORDER ITEMS */

let urlParams = new URLSearchParams(window.location.search);
let mode = urlParams.get("mode");

let cart = [];

if (mode === "buyNow") {

    let buyNowItem = JSON.parse(localStorage.getItem("buyNowItem"));

    if (buyNowItem) {
        cart = [buyNowItem];
    }

} else {

    cart = JSON.parse(localStorage.getItem("cafeCart")) || [];

}


/* CHECK EMPTY CART */

if (cart.length === 0) {

    window.location.href = "cart.html";

} else {

    /* SAVE CURRENT ORDER ITEMS */

    localStorage.setItem("cafeOrderItems", JSON.stringify(cart));

    localStorage.setItem(
        "cafeOrderMode",
        mode === "buyNow" ? "buyNow" : "cart"
    );


    /* DISPLAY ORDER SUMMARY */

    let total = 0;
    let summary = document.getElementById("orderSummary");

    summary.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];
        let subtotal = item.price * item.quantity;

        total += subtotal;

        let paragraph = document.createElement("p");

        paragraph.textContent =
            item.name + " (" + item.size + ") x " +
            item.quantity + " = ₱" + subtotal.toFixed(2);

        summary.appendChild(paragraph);
    }


    /* DISPLAY TOTAL */

    document.getElementById("checkoutTotal").textContent =
        "₱" + total.toFixed(2);


    /* CHECKOUT FORM */

    document.getElementById("checkoutForm").onsubmit = function(event) {

        event.preventDefault();

        let customer = {
            name: document.getElementById("customerName").value.trim(),
            contact: document.getElementById("contactNumber").value.trim(),
            email: document.getElementById("email").value.trim()
        };


        /* CHECK CUSTOMER NAME */

        if (customer.name === "") {
            alert("Please enter your full name.");
            return;
        }


        /* CONFIRM CHECKOUT */

        let confirmCheckout = confirm(
            "Do you want to continue to pickup?"
        );

        if (confirmCheckout) {

            localStorage.setItem(
                "cafeCustomer",
                JSON.stringify(customer)
            );

            window.location.href = "pickup.html";
        }

    };

}
