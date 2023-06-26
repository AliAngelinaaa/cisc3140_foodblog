var loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
      var loginForm = document.getElementById("login-form");
      var welcomeMessage = document.getElementById("welcome-message");
      if (loginForm && welcomeMessage) {
        loginForm.style.display = "none";
        welcomeMessage.style.display = "block";
        welcomeMessage.textContent = "Welcome, " + username;
      }
    }
  });
}

// Retrieve the item cards
var itemCards = document.getElementsByClassName("item-card");

// Initialize the total price, tax, and total amount
var totalPrice = 0;
var tax = 0;
var totalAmount = 0;

// Iterate over the item cards and add event listeners to the checkboxes
for (var i = 0; i < itemCards.length; i++) {
  var checkbox = itemCards[i].querySelector(".item-checkbox");
  checkbox.addEventListener("change", updateTotal);
}

// Function to update the total price, tax, and total amount
function updateTotal() {
  // Reset the values
  totalPrice = 0;
  tax = 0;
  totalAmount = 0;

  // Iterate over the item cards and calculate the total price
  for (var i = 0; i < itemCards.length; i++) {
    var checkbox = itemCards[i].querySelector(".item-checkbox");
    if (checkbox.checked) {
      var price = parseFloat(checkbox.value);
      totalPrice += price;
    }
  }

  // Calculate the tax and total amount
  tax = totalPrice * 0.1; // Assuming 10% tax rate
  totalAmount = totalPrice + tax;

  // Update the HTML elements with the calculated values
  var priceElement = document.getElementById("price");
  var taxElement = document.getElementById("tax");
  var totalElement = document.getElementById("total");

  priceElement.textContent = "$" + totalPrice.toFixed(2);
  taxElement.textContent = "$" + tax.toFixed(2);
  totalElement.textContent = "$" + totalAmount.toFixed(2);
}

// Add event listener to the Add to Cart button
var addToCartBtn = document.getElementById("add-cart-btn");
addToCartBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  // Retrieve the selected items
  var selectedItems = [];

  for (var i = 0; i < itemCards.length; i++) {
    var checkbox = itemCards[i].querySelector(".item-checkbox");
    if (checkbox.checked) {
      var itemName = itemCards[i].querySelector("h3").textContent;
      selectedItems.push(itemName);
    }
  }

  // Store the selected items in localStorage
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

  // Redirect to the payment.html page
  window.location.href = "payment.html";
});

// Retrieve the selected items from localStorage
var selectedItems = localStorage.getItem("selectedItems");

// Display the selected items in the payment.html page
var selectedItemsElement = document.getElementById("selected-items");
if (selectedItemsElement) {
  selectedItemsElement.textContent = selectedItems;
}

var paymentForm = document.getElementById("payment-form");
if (paymentForm) {
  paymentForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    // Retrieve the payment details from the form
    var name = document.getElementById("name").value;
    var creditCard = document.getElementById("credit-card").value;
    var expirationDate = document.getElementById("expiration-date").value;
    var cvc = document.getElementById("cvc").value;

    // Store the payment details in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("creditCard", creditCard);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("cvc", cvc);

    // Redirect to the verification.html page
    window.location.href = "verification.html";
  });
}
