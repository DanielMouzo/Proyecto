// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar la función
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos del DOM con la clase 'parent-menu'
    var parentMenus = document.querySelectorAll('.parent-menu');
    
    // Itera sobre cada elemento seleccionado
    parentMenus.forEach(function(menu) {
        // Agrega un evento 'click' a cada elemento 'parent-menu'
        menu.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del evento (por ejemplo, navegación de enlace)
            event.preventDefault();
            // Obtiene el siguiente elemento hermano del 'parent-menu' (el submenú)
            var submenu = menu.nextElementSibling;
            // Alterna la clase 'show' en el submenú, para mostrar u ocultar el submenú
            submenu.classList.toggle('show');
        });
    });
});
