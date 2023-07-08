// calendar.js
function createCalendar(calendarId, eventDates, eventDescriptions, eventPrices) {
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var calendar = document.getElementById(calendarId);

  // Generate calendar header
  var header = document.createElement("div");
  header.classList.add("calendar-header");
  header.textContent = `${currentYear} ${getMonthName(currentMonth)}`;
  calendar.appendChild(header);

  // Generate calendar table
  var table = document.createElement("table");
  table.classList.add("calendar-table");

  // Generate table header (weekdays)
  var thead = document.createElement("thead");
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var headerRow = document.createElement("tr");
  weekdays.forEach(function(weekday) {
     var th = document.createElement("th");
     th.textContent = weekday;
     headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Generate table body (calendar days)
  var tbody = document.createElement("tbody");
  var currentDate = new Date(currentYear, currentMonth, 1);
  var startDate = getStartDate(currentDate);
  var endDate = getEndDate(currentDate);
  var currentRow;

  while (startDate <= endDate) {
     if (startDate.getDay() === 0) {
        currentRow = document.createElement("tr");
        tbody.appendChild(currentRow);
     }

     var td = document.createElement("td");
     td.textContent = startDate.getDate();

     if (startDate.getMonth() === currentMonth) {
        // Apply styles for days in the current month
        td.classList.add("current-month-day");

        // Check if there is an event on the current day
        var eventIndex = eventDates.findIndex(function(date) {
           return isSameDay(startDate, new Date(date));
        });

        if (eventIndex !== -1) {
           // Create event details for the day
           var eventDiv = document.createElement("div");
           eventDiv.classList.add("event");
           eventDiv.innerHTML = `
              <div class="event-date">${eventDates[eventIndex]}</div>
              <div class="event-description">${eventDescriptions[eventIndex]}</div>
              <div class="event-price">${eventPrices[eventIndex]}</div>
           `;
           td.appendChild(eventDiv);
        }
     } else {
        // Apply styles for days outside the current month
        td.classList.add("other-month-day");
     }

     currentRow.appendChild(td);
     startDate.setDate(startDate.getDate() + 1);
  }

  tbody.appendChild(currentRow);
  table.appendChild(tbody);
  calendar.appendChild(table);
}

function getMonthName(month) {
  var monthNames = [
     "January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month];
}

function getStartDate(date) {
  var startDate = new Date(date);
  startDate.setDate(1);
  startDate.setDate(1 - startDate.getDay());
  return startDate;
}

function getEndDate(date) {
  var endDate = new Date(date);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(0);
  endDate.setDate(endDate.getDate() + 6 - endDate.getDay());
  return endDate;
}

function isSameDay(date1, date2) {
  return (
     date1.getFullYear() === date2.getFullYear() &&
     date1.getMonth() === date2.getMonth() &&
     date1.getDate() === date2.getDate()
  );
}
