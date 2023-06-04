document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("welcome-message").style.display = "block";
        document.getElementById("welcome-message").textContent = "Welcome, " + username;
    }
});

window.addEventListener("DOMContentLoaded", function() {
    // Get the selected items from the URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedItems = urlParams.getAll("item");

    // Display the selected items in the payment.html page
    const selectedItemsElement = document.getElementById("selected-items");
    selectedItemsElement.textContent = selectedItems.join(", ");
});

window.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox elements
    const itemCheckboxes = document.querySelectorAll(".item-checkbox");

    // Add event listeners to the checkboxes
    itemCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", updateTotal);
    });

    // Function to update the total price, tax, and total amount
    function updateTotal() {
        let price = 0;
        let tax = 0;
        let total = 0;

        // Calculate the price based on the selected items
        itemCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                price += parseFloat(checkbox.value);
            }
        });

        // Calculate the tax (8% of the price)
        tax = price * 0.08;

        // Calculate the total amount
        total = price + tax;

        // Update the price, tax, and total amount in the HTML
        document.getElementById("price").textContent = "$" + price.toFixed(2);
        document.getElementById("tax").textContent = "$" + tax.toFixed(2);
        document.getElementById("total").textContent = "$" + total.toFixed(2);
    }
});
