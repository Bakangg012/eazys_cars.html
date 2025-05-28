// Hardcoded users (Replace this with backend authentication for real security)
const users = {
    "admin": "admin",
    "user1": "user1",
    "test": "test123"
};

// Function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("uname").value.trim();
    let password = document.getElementById("psw").value.trim();

    if (users[username] && users[username] === password) {
        alert("Login Successful!");
        localStorage.setItem("loggedInUser", username); // Store session
        window.location.href = "eazys_cars.html"; // Redirect to home page
    } else {
        alert("Invalid username or password.");
    }
}


function checkLogin() {
    let user = localStorage.getItem("loggedInUser");
    let loginButton = document.getElementById("loginButton");
    let logoutButton = document.getElementById("logoutButton");

    if (user) {
        if (loginButton) loginButton.style.display = "none"; 
        if (logoutButton) logoutButton.style.display = "block"; // Show logout button
    } else {
        if (loginButton) loginButton.style.display = "block"; // Show login button
        if (logoutButton) logoutButton.style.display = "none"; 
    }
}


function logout() {
    localStorage.removeItem("loggedInUser"); // Remove user session
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("id01");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
};

// Run checkLogin on page load
document.addEventListener("DOMContentLoaded", checkLogin);
