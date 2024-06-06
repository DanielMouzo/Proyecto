// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar la función
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el contenedor del slider con la clase 'slider'
    const slider = document.querySelector('.slider');
    // Obtiene todos los elementos de las diapositivas con la clase 'slide'
    const slides = document.querySelectorAll('.slide');
    // Obtiene el botón de navegación previo con la clase 'prev'
    const prevButton = document.querySelector('.prev');
    // Obtiene el botón de navegación siguiente con la clase 'next'
    const nextButton = document.querySelector('.next');
    // Inicializa el índice de la diapositiva actual en 0
    let currentIndex = 0;

    // Función para mostrar la diapositiva en el índice especificado
    function showSlide(index) {
        // Transforma el contenedor del slider para mostrar la diapositiva correspondiente
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Agrega un evento 'click' al botón de navegación previo
    prevButton.addEventListener('click', function() {
        // Actualiza el índice de la diapositiva actual, retrocediendo una posición, y manejando el ciclo
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        // Muestra la diapositiva correspondiente al índice actualizado
        showSlide(currentIndex);
    });

    // Agrega un evento 'click' al botón de navegación siguiente
    nextButton.addEventListener('click', function() {
        // Actualiza el índice de la diapositiva actual, avanzando una posición, y manejando el ciclo
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        // Muestra la diapositiva correspondiente al índice actualizado
        showSlide(currentIndex);
    });

    // Configura un intervalo para cambiar automáticamente la diapositiva cada 5 segundos
    setInterval(function() {
        // Actualiza el índice de la diapositiva actual, avanzando una posición, y manejando el ciclo
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        // Muestra la diapositiva correspondiente al índice actualizado
        showSlide(currentIndex);
    }, 5000);
});
