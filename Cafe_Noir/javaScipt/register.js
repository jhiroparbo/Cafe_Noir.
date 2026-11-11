document.getElementById("registerForm").onsubmit = function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let account = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("cafeAccount", JSON.stringify(account));

    alert("Registration successful! You can now sign in.");

    window.location.href = "login.html";
};