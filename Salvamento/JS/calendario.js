// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar la función
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtiene el elemento del DOM con el id 'calendar'
    var calendarEl = document.getElementById('calendar');
    
    // Crea una nueva instancia del calendario de FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        
        // Establece la vista inicial del calendario en el mes completo
        initialView: 'dayGridMonth',
        
        // Configura el idioma del calendario a español
        locale: 'es',
        
        // Configura la barra de herramientas del encabezado del calendario
        headerToolbar: {
            left: 'prev,next today',  
            center: 'title',          
            right: 'dayGridMonth,timeGridWeek,timeGridDay'  
        },
        
        // Define los eventos que se mostrarán en el calendario
        events: [
            {
                title: 'Campeonato de España - Playa',  
                start: '2024-07-01',                    
                end: '2024-07-03'                       
            },
            {
                title: 'Campeonato Gallego - Piscina',
                start: '2024-07-10'                    
            },
            {
                title: 'Campeonato de España - Piscina',
                start: '2024-07-15',
                end: '2024-07-17'
            },
            {
                title: 'Campeonato Gallego - Playa',
                start: '2024-08-05'
            },
            {
                title: 'Campeonato Nacional de Rescate',
                start: '2024-08-20',
                end: '2024-08-22'
            },
            {
                title: 'Competición Regional de Salvamento',
                start: '2024-09-10'
            },
            {
                title: 'Campeonato de España - Socorrismo',
                start: '2024-09-15',
                end: '2024-09-17'
            },
            {
                title: 'Copa de Galicia - Playa',
                start: '2024-09-25'
            },
            {
                title: 'Torneo de Salvamento Juvenil',
                start: '2024-10-05'
            },
            {
                title: 'Campeonato Interautonómico',
                start: '2024-10-15',
                end: '2024-10-17'
            },
            {
                title: 'Campeonato Nacional - Playa',
                start: '2024-11-01',
                end: '2024-11-03'
            },
            {
                title: 'Campeonato de Galicia - Socorrismo',
                start: '2024-11-10'
            }
        ]
    });
    
    // Renderiza el calendario en la página
    calendar.render();
});
