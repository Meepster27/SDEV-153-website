const currentMonthYear = document.getElementById('currentMonthYear');
const calendarDays = document.getElementById('calendarDays');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
    calendarDays.innerHTML = ''; // Clear previous days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    currentMonthYear.textContent = new Date(currentYear, currentMonth).toLocaleString('en-us', { month: 'long', year: 'numeric' });

    // Add empty divs for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        calendarDays.appendChild(emptyDiv);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
            dayDiv.classList.add('today');
        }
        calendarDays.appendChild(dayDiv);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

renderCalendar(); // Initial render