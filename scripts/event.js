// Define your events here
const events = [
    {
      date: '2023-06-12',
      title: 'Meeting with clients',
      description: 'Discuss project requirements and timelines',
    },
    {
      date: '2023-06-18',
      title: 'Team outing',
      description: 'Enjoy a fun-filled day with colleagues',
    },
    // Add more events as needed
  ];
  
  // Function to add events to the table
  function addEventsToTable() {
    const tableBody = document.querySelector('#eventCalendar tbody');
  
    // Clear table body
    tableBody.innerHTML = '';
  
    // Add events to the table
    events.forEach((event) => {
      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      const titleCell = document.createElement('td');
      const descriptionCell = document.createElement('td');
  
      dateCell.textContent = event.date;
      titleCell.textContent = event.title;
      descriptionCell.textContent = event.description;
  
      row.appendChild(dateCell);
      row.appendChild(titleCell);
      row.appendChild(descriptionCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to add events to the table
  addEventsToTable();
  