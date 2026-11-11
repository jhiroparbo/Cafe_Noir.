document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let account = JSON.parse(localStorage.getItem("cafeAccount"));

    if (!account) {
        alert("No registered account found. Please register first.");
        return;
    }

    if (email === account.email && password === account.password) {

        alert("Login successful! Welcome to Cafe Noir.");

        window.location.href = "home.html";

    } else {
        alert("Incorrect email or password. Please try again.");
    }
};
