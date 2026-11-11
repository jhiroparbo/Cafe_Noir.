
const pickupDate = document.getElementById("pickupDate");
const pickupTime = document.getElementById("pickupTime");
const availableTime = document.getElementById("availableTime");

let cart = JSON.parse(localStorage.getItem("cafeOrderItems")) || [];


/* CHECK EMPTY CART */

if (cart.length === 0) {

    window.location.href = "cart.html";

} else {

    /* COUNT TOTAL QUANTITY */

    let totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
        totalItems += Number(cart[i].quantity);
    }


    /* SET PREPARATION TIME */

    let preparationTime = 10;

    if (totalItems >= 3 && totalItems <= 5) {
        preparationTime = 20;
    } else if (totalItems >= 6 && totalItems <= 10) {
        preparationTime = 30;
    } else if (totalItems > 10) {
        preparationTime = 40;
    }


    /* GET CURRENT DATE */

    function getCurrentDate() {

        let today = new Date();

        let year = today.getFullYear();
        let month = String(today.getMonth() + 1).padStart(2, "0");
        let day = String(today.getDate()).padStart(2, "0");

        return year + "-" + month + "-" + day;
    }

    let currentDate = getCurrentDate();

    pickupDate.min = currentDate;
    pickupDate.max = currentDate;
    pickupDate.value = currentDate;


    /* OPERATING HOURS */

    let openingTime = "10:00";
    let closingTime = "22:00";


    /* GET EARLIEST PICKUP TIME */

    function updateAvailableTime() {

        let selectedDate = pickupDate.value;

        if (selectedDate !== currentDate) {

            availableTime.textContent =
                "Please select today's date only.";

            pickupTime.disabled = true;
            pickupTime.value = "";

            return;
        }

        let earliestTime = new Date();

        // ADD PREPARATION TIME

        earliestTime.setMinutes(
            earliestTime.getMinutes() + preparationTime
        );

        // ROUND UP TO THE NEXT MINUTE

        if (earliestTime.getSeconds() > 0) {
            earliestTime.setMinutes(
                earliestTime.getMinutes() + 1
            );
        }

        earliestTime.setSeconds(0, 0);


        // CHECK OPENING TIME

        let openingDate = new Date();

        openingDate.setHours(10, 0, 0, 0);

        if (earliestTime < openingDate) {
            earliestTime = openingDate;
        }


        // CONVERT TO TIME FORMAT

        let hours = String(earliestTime.getHours()).padStart(2, "0");
        let minutes = String(earliestTime.getMinutes()).padStart(2, "0");

        let minimumTime = hours + ":" + minutes;


        // CHECK CLOSING TIME

        if (minimumTime > closingTime) {

            availableTime.textContent =
                "No available pickup time today. Please try again during operating hours.";

            pickupTime.disabled = true;
            pickupTime.value = "";

        } else {

            pickupTime.disabled = false;

            pickupTime.min = minimumTime;
            pickupTime.max = closingTime;

            availableTime.textContent =
                "Earliest available pickup: " +
                earliestTime.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                }) +
                " (" + preparationTime +
                " minutes preparation time).";
        }
    }


    /* UPDATE WHEN DATE CHANGES */

    pickupDate.addEventListener("change", function() {

        pickupTime.value = "";

        updateAvailableTime();

    });


    /* PICKUP FORM */

    document.getElementById("pickupForm").onsubmit = function(event) {

        event.preventDefault();

        let date = pickupDate.value;
        let time = pickupTime.value;

        if (!date || !time) {

            alert("Please select your pickup date and time.");
            return;
        }


        // CHECK SAME-DAY PICKUP

        currentDate = getCurrentDate();

        if (date !== currentDate) {

            alert("Please select today's date only.");
            return;
        }


        // UPDATE AVAILABLE TIME

        updateAvailableTime();

        if (pickupTime.disabled) {

            alert("No available pickup time today.");
            return;
        }


        // CHECK TIME LIMITS

        if (time < pickupTime.min || time > closingTime) {

            alert("Please select an available pickup time.");
            return;
        }


        // CONFIRM PICKUP

        let confirmPickup = confirm(
            "Do you want to confirm your pickup schedule?"
        );

        if (confirmPickup) {

            let pickup = {
                date: date,
                time: time,
                preparationTime: preparationTime
            };

            localStorage.setItem(
                "cafePickup",
                JSON.stringify(pickup)
            );

            window.location.href = "payment.html";
        }

    };


    /* INITIAL DISPLAY */

    updateAvailableTime();

}
