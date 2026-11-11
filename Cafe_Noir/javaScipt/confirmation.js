let order = JSON.parse(localStorage.getItem("cafeOrder"));
let orderDetails = document.getElementById("orderDetails");

/* FORMAT DATE */
function formatDate(date) {
    return new Date(date + "T00:00:00").toLocaleDateString("en-US");
}

// FORMAT TIME TO AM/PM
function formatTime(time) {
    return new Date("2000-01-01T" + time).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

/* DISPLAY ORDER DETAILS */
function addDetail(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    orderDetails.appendChild(paragraph);
}

if (order) {

    // ORDER NUMBER
    addDetail("Order Number: " + order.orderNumber);

    // CUSTOMER INFORMATION 
    let customerHeading = document.createElement("h3");
    customerHeading.textContent = "Customer Information";
    orderDetails.appendChild(customerHeading);

    addDetail("Customer: " + order.customer.name);
    addDetail("Contact: " + order.customer.contact);
    addDetail("Email: " + order.customer.email);

    // ORDERED PRODUCTS
    let heading = document.createElement("h3");
    heading.textContent = "Ordered Products";
    orderDetails.appendChild(heading);

    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];

        addDetail(
            item.name + " (" + item.size + ") x " +
            item.quantity + " - ₱" +
            (item.price * item.quantity).toFixed(2)
        );
    }

    // TOTAL
    addDetail("Total: ₱" + order.total.toFixed(2));

    // PICKUP INFORMATION
    let pickupHeading = document.createElement("h3");
    pickupHeading.textContent = "Pickup Information";
    orderDetails.appendChild(pickupHeading);

    addDetail("Pickup Date: " + formatDate(order.pickup.date));
    addDetail("Pickup Time: " + formatTime(order.pickup.time));

    // PAYMENT INFORMATION
    let paymentHeading = document.createElement("h3");
    paymentHeading.textContent = "Payment Information";
    orderDetails.appendChild(paymentHeading);

    addDetail("Payment Method: " + order.payment);

    // ORDER STATUS
    addDetail("Order Status: " + order.status);

} else {
    addDetail("No order information found.");
}
