document.addEventListener('DOMContentLoaded', function() {
    var parentMenus = document.querySelectorAll('.parent-menu');
    parentMenus.forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            event.preventDefault();
            var submenu = menu.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});
