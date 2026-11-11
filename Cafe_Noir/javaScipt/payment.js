
/* GET ORDER INFORMATION */

let cart = JSON.parse(localStorage.getItem("cafeOrderItems")) || [];
let customer = JSON.parse(localStorage.getItem("cafeCustomer"));
let pickup = JSON.parse(localStorage.getItem("cafePickup"));
let mode = localStorage.getItem("cafeOrderMode");


/* CHECK ORDER INFORMATION */

if (cart.length === 0 || !customer || !pickup) {

    window.location.href = "cart.html";

} else {

    /* COMPUTE TOTAL */

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }


    /* DISPLAY TOTAL */

    document.getElementById("paymentTotal").textContent =
        "₱" + total.toFixed(2);


    /* PAYMENT FORM */

    document.getElementById("paymentForm").onsubmit = function(event) {

        event.preventDefault();

        let paymentMethod =
            document.getElementById("paymentMethod").value;

        if (paymentMethod === "") {

            alert("Please select a payment method.");
            return;
        }


        /* CONFIRM ORDER */

        let confirmOrder = confirm(
            "Are you sure you want to place your order?"
        );

        if (confirmOrder) {

            let order = {
                orderNumber: "CN-" + Date.now(),
                customer: customer,
                items: cart,
                pickup: pickup,
                payment: paymentMethod,
                total: total,
                status: "Pending"
            };


            /* SAVE FINAL ORDER */

            localStorage.setItem(
                "cafeOrder",
                JSON.stringify(order)
            );


            /* CLEAR PROCESSED ORDER */

            if (mode === "cart") {
                localStorage.removeItem("cafeCart");
            }

            localStorage.removeItem("buyNowItem");
            localStorage.removeItem("cafeOrderItems");
            localStorage.removeItem("cafeOrderMode");
            localStorage.removeItem("cafeCustomer");
            localStorage.removeItem("cafePickup");


            alert("Your order has been successfully placed!");

            window.location.href = "confirmation.html";
        }

    };

}
