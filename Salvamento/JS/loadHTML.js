function loadHtml(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            Cookies();
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadHtml('navbar', '/Pantallas/Navbar/navbar.html');
    loadHtml('footer', '/Pantallas/Footer/footer.html');
});


