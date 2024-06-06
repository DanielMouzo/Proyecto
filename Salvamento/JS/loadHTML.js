// Define la función loadHtml para cargar contenido HTML en un elemento específico
function loadHtml(id, url) {
    // Realiza una solicitud HTTP GET a la URL especificada usando fetch
    fetch(url)
        // Convierte la respuesta a texto
        .then(response => response.text())
        // Inserta el contenido HTML obtenido en el elemento con el id especificado
        .then(data => {
            document.getElementById(id).innerHTML = data;
            // Llama a la función Cookies después de cargar el HTML
            Cookies();
        });
}

// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar las funciones
document.addEventListener("DOMContentLoaded", function() {
    // Carga el contenido del archivo navbar.html en el elemento con id 'navbar'
    loadHtml('navbar', '/Pantallas/Navbar/navbar.html');
    // Carga el contenido del archivo footer.html en el elemento con id 'footer'
    loadHtml('footer', '/Pantallas/Footer/footer.html');
});
