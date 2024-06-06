// Define la función Cookies para manejar la lógica de la política de cookies
function Cookies() {
    // Obtiene el elemento del DOM con el id 'cookieModal' (el modal de cookies)
    const modal = document.getElementById("cookieModal");
    // Obtiene el botón que abre el modal de cookies con el id 'politica-cookies'
    const btn = document.getElementById("politica-cookies");
    // Obtiene el primer elemento con la clase 'close' (la 'x' para cerrar el modal)
    const span = document.getElementsByClassName("close")[0];
    // Obtiene el botón de aceptar cookies con el id 'acceptCookies'
    const acceptButton = document.getElementById("acceptCookies");

    // Define la función para mostrar el modal cuando se hace clic en el botón de política de cookies
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Define la función para ocultar el modal cuando se hace clic en el elemento de cierre ('x')
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Define la función para ocultar el modal cuando se hace clic en el botón de aceptar cookies
    acceptButton.onclick = function() {
        modal.style.display = "none";
    }

    // Define la función para ocultar el modal si se hace clic en cualquier lugar fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar la función Cookies
document.addEventListener("DOMContentLoaded", function() {
    Cookies();
});

