// Register function
function register(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("reg-username").value.trim();
    let password = document.getElementById("reg-password").value.trim();

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
}
