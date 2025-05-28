// Run authentication check on page load
document.addEventListener("DOMContentLoaded", function() {
    let user = localStorage.getItem("loggedInUser");
    let loginButton = document.getElementById("loginButton");
    let logoutForm = document.getElementById("logoutForm");

    if (user) {
        if (loginButton) loginButton.style.display = "none";
        if (logoutForm) logoutForm.style.display = "block";
    }
});

// Login function
function login(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("uname").value.trim();
    let password = document.getElementById("psw").value.trim();
}
if (username === "" || password === "") {
    alert("Please enter a valid username and password!");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || {};

if (users[username]) {
    alert("Username already exists! Try another.");
} else {
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page
}
