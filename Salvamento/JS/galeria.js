// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar la función
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento del DOM con el id 'modal' (el modal de visualización de imágenes)
    var modal = document.getElementById("modal");
    // Obtiene el elemento del DOM con el id 'img01' (la imagen dentro del modal)
    var modalImg = document.getElementById("img01");
    // Selecciona todas las imágenes dentro de la clase 'galeriaOrden'
    var images = document.querySelectorAll(".galeriaOrden img");

    // Agrega un evento 'click' a cada imagen de la galería
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            // Muestra el modal cuando se hace clic en una imagen
            modal.style.display = "block";
            // Establece la fuente de la imagen del modal a la fuente de la imagen clicada
            modalImg.src = this.src;
        });
    });

    // Obtiene el primer elemento con la clase 'close' (la 'x' para cerrar el modal)
    var span = document.getElementsByClassName("close")[0];

    // Define la función para ocultar el modal cuando se hace clic en el elemento de cierre ('x')
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Define la función para ocultar el modal si se hace clic en cualquier lugar fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

