document.addEventListener("DOMContentLoaded", function() {
    let user = localStorage.getItem("loggedInUser");
    let inboxButton = document.getElementById("inboxButton");

    if (user && inboxButton) {
        inboxButton.style.display = "block";
    }
});
