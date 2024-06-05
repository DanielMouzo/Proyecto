document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
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
    calendar.render();
});