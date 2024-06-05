function Cookies() {
    const modal = document.getElementById("cookieModal");
    const btn = document.getElementById("politica-cookies");
    const span = document.getElementsByClassName("close")[0];
    const acceptButton = document.getElementById("acceptCookies");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    acceptButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    Cookies();
});
