document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const submenu = this.querySelector('ul');

            // Si el elemento tiene un submenu
            if (submenu) {
                // Evita que el enlace se siga
                event.preventDefault();

                // Si el submenu ya está visible, ocúltalo
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    // Oculta todos los submenus visibles
                    document.querySelectorAll('.menu ul ul.show').forEach(sub => {
                        sub.classList.remove('show');
                    });

                    // Muestra el submenu del elemento clickeado
                    submenu.classList.add('show');
                }
            }
        });
    });
});
