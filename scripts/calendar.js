// Get the current date
const currentDate = new Date();

// Get the year and month of the current date
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Function to generate the event calendar
function generateEventCalendar(year, month) {
  // Get the target element where the calendar will be displayed
  const calendarContainer = document.getElementById('eventCalendar');

  // Create a new table element
  const calendarTable = document.createElement('table');

  // Generate the calendar header
  const calendarHeader = generateCalendarHeader(year, month);

  // Generate the calendar body
  const calendarBody = generateCalendarBody(year, month);

  // Append the header and body to the table
  calendarTable.appendChild(calendarHeader);
  calendarTable.appendChild(calendarBody);

  // Append the table to the calendar container
  calendarContainer.appendChild(calendarTable);
}

// Function to generate the calendar header
function generateCalendarHeader(year, month) {
  // Create a table header element
  const calendarHeader = document.createElement('thead');

  // Create a table row element
  const headerRow = document.createElement('tr');

  // Create table header cells for the days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let day of daysOfWeek) {
    const headerCell = document.createElement('th');
    headerCell.textContent = day;
    headerRow.appendChild(headerCell);
  }

  // Append the header row to the header element
  calendarHeader.appendChild(headerRow);

  return calendarHeader;
}

// Function to generate the calendar body
function generateCalendarBody(year, month) {
  // Create a table body element
  const calendarBody = document.createElement('tbody');

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the day of the week for the first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Create variables to keep track of the day and table cells
  let dayCount = 1;
  let cellCount = 0;

  // Create table rows and cells for the calendar
  while (dayCount <= daysInMonth) {
    // Create a new table row element
    const row = document.createElement('tr');

    // Create table cells for each day of the week
    for (let i = 0; i < 7; i++) {
      const cell = document.createElement('td');

      // Check if the cell should contain a day or be empty
      if (cellCount >= firstDay && dayCount <= daysInMonth) {
        cell.textContent = dayCount;

        // Check if the current day is the current date
        if (year === currentDate.getFullYear() && month === currentDate.getMonth() && dayCount === currentDate.getDate()) {
          cell.classList.add('current-day');
        }

        dayCount++;
      }

      // Append the cell to the row
      row.appendChild(cell);
      cellCount++;
    }

    // Append the row to the table body
    calendarBody.appendChild(row);
  }

  return calendarBody;
}

// Generate the event calendar for the current month and year
generateEventCalendar(currentYear, currentMonth);
