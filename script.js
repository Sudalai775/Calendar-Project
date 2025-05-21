// Define the dayOrders object
const dayOrders = {
    '2024-12-04': 1, '2024-12-05': 2, '2024-12-06': 3, '2024-12-09': 4,
    '2024-12-10': 5, '2024-12-11': 6, '2024-12-12': 1, '2024-12-13': 2,
    '2024-12-16': 3, '2024-12-17': 4, '2024-12-18': 5, '2024-12-19': 6,
    '2024-12-20': 1, '2024-12-21': 2, '2024-12-23': 3, '2024-12-24': 4,
    '2024-12-26': 5, '2024-12-27': 6, '2024-12-30': 1, '2024-12-31': 2,
    '2025-01-02': 3, '2025-01-03': 4, '2025-01-04': 5, '2025-01-06': 6,
    '2025-01-07': 1, '2025-01-08': 2, '2025-01-09': 3, '2025-01-10': 4,
    '2025-01-20': 5, '2025-01-21': 6, '2025-01-22': 1, '2025-01-23': 2,
    '2025-01-24': 3, '2025-01-25': 4, '2025-01-27': 5, '2025-01-28': 6,
    '2025-01-29': 1, '2025-01-30': 2, '2025-01-31': 3, '2025-02-03': 4,
    '2025-02-04': 5, '2025-02-05': 6, '2025-02-06': 1, '2025-02-07': 2,
    '2025-02-10': 3, '2025-02-12': 4, '2025-02-13': 5, '2025-02-14': 6,
    '2025-02-15': 1, '2025-02-17': 2, '2025-02-18': 3, '2025-02-19': 4,
    '2025-02-20': 5, '2025-02-21': 6, '2025-02-22': 1, '2025-02-24': 2,
    '2025-02-25': 3, '2025-02-26': 4, '2025-02-27': 5, '2025-02-28': 6,
    '2025-03-03': 1, '2025-03-04': 2, '2025-03-05': 3, '2025-03-06': 4,
    '2025-03-07': 5, '2025-03-10': 6, '2025-03-11': 1, '2025-03-12': 2,
    '2025-03-13': 3, '2025-03-14': 4, '2025-03-15': 5, '2025-03-17': 6,
    '2025-03-18': 1, '2025-03-19': 2, '2025-03-20': 3, '2025-03-21': 4,
    '2025-03-22': 5, '2025-03-24': 6, '2025-03-25': 1, '2025-03-26': 2,
    '2025-03-27': 3, '2025-03-28': 4, '2025-04-01': 5, '2025-04-02': 6,
    '2025-04-03': 1, '2025-04-04': 2, '2025-04-05': 3, '2025-04-07': 4,
    '2025-04-08': 5, '2025-04-09': 6,
};

// Define class schedules
const classSchedule = {
    1: ["LANG", "JAVA/JS", "VAL_ED/RS", "ENG", "JAVA/JS/SM DLAB"],
    2: ["EVS", "LANG", "ENG", "JAVA/JS/RJ DLAB", "JAVA/JS"],
    3: ["ENG", "JAVA/JS", "LANG", "JAVA/JS/BJ DLAB", "ACC"],
    4: ["NM/JAVA_THEORY/JS/GD DLAB", "ENG", "NM/JAVA/JS DLAB", "LANG", "ACC"],
    5: ["ACC", "ENG", "JAVA/JS", "JAVA/JS/BJ DLAB", "LANG"],
    6: ["JAVA/JS", "LANG", "JAVA/JS/RS/ DLAB", "VAL_ED/NV", "ENG"]
};

// Define the holiday object
const holidays = {
   '2025-01-01': 'NEW YEAR',
    '2025-01-13': 'BHOGI',
    '2025-01-14': 'PONGAL',
    '2025-01-15': 'THIRUVALLUR DAY/INDIAN ARMY DAY',
    '2025-01-16': 'UZHAVAR THIRUNAL NATIONAL STARTUP DAY',
    '2025-01-17': 'CIVIL RIGHTS DAY',
    '2025-01-18': 'NATIONAL FOREST DAY',
    '2025-02-11': 'THAIPUSAM',
    '2025-03-31': 'RAMZAN',
};

// Define the timings for each period
const periodTimings = [
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:40 PM - 03:35 PM',
    '03:35 PM - 04:30 PM'
];

// Define global variables for elements and date
const daysContainer = document.getElementById('days');
const monthElement = document.getElementById('month');
const prevButton = document.getElementById('prevMonth');
const nextButton = document.getElementById('nextMonth');
const timetable = document.getElementById('timetable');
const selectedDateElement = document.getElementById('selectedDate');
const backButton = document.getElementById('back');
const timetableBody = document.getElementById('timetableBody');
const todayButton = document.getElementById('todayButton');
let date = new Date();

// Function to render the calendar
// Function to render the calendar
const renderCalendar = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    // Debugging output
    console.log(`Current Date: ${date}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
    console.log(`First Day of Month: ${firstDay}`);
    console.log(`Last Date of Month: ${lastDate}`);

    monthElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    daysContainer.innerHTML = '';

    // Previous month's dates
    for (let i = firstDay; i > 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('padding-day');
        dayElement.textContent = prevLastDate - i + 1;
        daysContainer.appendChild(dayElement);
    }

    // Current month's dates
    for (let i = 1; i <= lastDate; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('month-day');
        dayElement.textContent = i;

        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        // Log the formatted date for debugging
        console.log(`Formatted Date: ${formattedDate}`);

        // Highlight today's date
        const todayDate = new Date().toISOString().split('T')[0];
        if (formattedDate === todayDate) {
            dayElement.classList.add('current-day');
        }

        // Highlight Sundays and holidays
        const dayOfWeek = new Date(year, month, i).getDay();
        if (dayOfWeek === 0) {
            // Sunday highlight
            dayElement.style.backgroundColor = '#ffcccc'; // Red for Sundays
        } else if (holidays[formattedDate]) {
            // Holiday highlight
            dayElement.style.backgroundColor = '#ccffcc'; // Green for holidays
            dayElement.title = holidays[formattedDate]; // Tooltip with holiday name
        }

        // Attach the click event to show the timetable
        dayElement.addEventListener('click', () => showTimetable(formattedDate));
        daysContainer.appendChild(dayElement);
    }

    // Next month's padding days
    const totalDays = firstDay + lastDate;
    const nextDays = 7 - (totalDays % 7);
    if (nextDays < 7) {
        for (let i = 1; i <= nextDays; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('padding-day');
            dayElement.textContent = i;
            daysContainer.appendChild(dayElement);
        }
    }
};

// Function to show the timetable for a given date
const showTimetable = (dateString) => {
    selectedDateElement.textContent = `Timetable for ${dateString}`;
    timetableBody.innerHTML = '';

    const dayOrder = dayOrders[dateString];
    const holidayName = holidays[dateString];

    // Create timetable content
    let timetableContent = `
        <h2>Selected Date: ${dateString}</h2>
        <h3>Day Order: ${dayOrder || 'N/A'}</h3>
        <h4>Timetable</h4>
        <table>
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
    `;

    if (dayOrder && classSchedule[dayOrder]) {
        const schedule = classSchedule[dayOrder];
        schedule.forEach((subject, index) => {
            timetableContent += `
                <tr>
                    <td>${periodTimings[index]}</td>
                    <td>${subject}</td>
                </tr>
            `;
        });
    } else {
        timetableContent += `
            <tr>
                <td colspan="2">No classes scheduled.</td>
            </tr>
        `;
    }

    // Close the table
    timetableContent += `
            </tbody>
        </table>
    `;

    // Add holiday details if applicable
    if (holidayName) {
        timetableContent += `
            <div class="holiday-info">
                <h4>Holiday</h4>
                <p>${holidayName}</p>
            </div>
        `;
    }

    // Update timetable body
    timetableBody.innerHTML = timetableContent;

    // Show the timetable and hide the calendar
    timetable.style.display = 'block';
    document.querySelector('.card').style.display = 'none';
};

// Function to go to the previous month
const goToPreviousMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

// Function to go to the next month
const goToNextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

// Function to go to the current month
const goToCurrentMonth = () => {
    date = new Date();
    renderCalendar();
};

// Event listeners for buttons
prevButton.addEventListener('click', goToPreviousMonth);
nextButton.addEventListener('click', goToNextMonth);
todayButton.addEventListener('click', goToCurrentMonth);
backButton.addEventListener('click', () => {
    timetable.style.display = 'none';
    document.querySelector('.card').style.display = 'block';
});

// Initial render of the calendar
renderCalendar();
