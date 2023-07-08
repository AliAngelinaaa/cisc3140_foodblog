"use strict";

      // Event data
      var eventDates = ["July 29, 2018 11:00:00", "July 30, 2018 19:00:00", "July 31, 2018 19:30:00",
                        // Rest of the event dates...
                        "September 13, 2018 20:00:00"];
      var eventDescriptions = ["Classics Brunch", "Lasers and Light", "Dixieland Jazz Masters",
                               // Rest of the event descriptions...
                               "Antonio Perez"];
      var eventPrices = ["$12", "$12/$18/$24", "$22/$31/$47",
                         // Rest of the event prices...
                         "$32/$48/$64"];

      // Create calendar view
      createCalendar("calendar", eventDates, eventDescriptions, eventPrices);