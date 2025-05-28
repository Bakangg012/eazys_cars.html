function logout() {
    console.log("Logging out...");

    // Store logout time BEFORE clearing sessionStorage
    sessionStorage.setItem("logoutTime", Date.now());

    // Remove logged-in user (but keep session storage intact for redirection)
    localStorage.removeItem("loggedInUser");

    // Redirect to login page
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000); // Slight delay to ensure logoutTime is saved
}

