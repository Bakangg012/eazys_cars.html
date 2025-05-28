
document.addEventListener("DOMContentLoaded", function() {
    let user = localStorage.getItem("loggedInUser");
    let loginButton = document.getElementById("loginButton");
    let logoutForm = document.getElementById("logoutForm");

    if (user) {
        if (loginButton) loginButton.style.display = "none";
        if (logoutForm) logoutForm.style.display = "block";
    }
});


function login(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("uname").value.trim();
    let password = document.getElementById("psw").value.trim();

    if (username === "" || password === "") {
        alert("Please enter a username and password!");
        return;
    }

    // Retrieve stored users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || {};

    // Check if the username exists and the password matches
    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful!");
        window.location.href = "eazys_cars.html"; // Redirect to Home Page
    } else {
        alert("Invalid username or password!");
    }
}
