// Log in Javascript
var loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", function (event) {
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

// Get the item grid element
const itemGrid = document.getElementById("item-grid");

// Generate HTML elements for each product
products.forEach(product => {
  const itemCard = document.createElement("div");
  itemCard.className = "item-card";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "item";
  checkbox.value = product.price;
  checkbox.className = "item-checkbox";
  const name = document.createElement("h3");
  name.textContent = product.name;
  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  label.appendChild(checkbox);
  label.appendChild(name);
  label.appendChild(price);

  itemCard.appendChild(image);
  itemCard.appendChild(label);

  itemGrid.appendChild(itemCard);

  // Add event listener to the checkbox
  checkbox.addEventListener("change", updateTotal);
});

// Retrieve the item cards
var itemCards = document.getElementsByClassName("item-card");

// Initialize the total price, tax, and total amount
var totalPrice = 0;
var tax = 0;
var totalAmount = 0;

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
  tax = totalPrice * 0.08; // Assuming 8% tax rate
  totalAmount = totalPrice + tax;

  // Update the HTML elements with the calculated values
  var priceElement = document.getElementById("price");
  var taxElement = document.getElementById("tax");
  var totalElement = document.getElementById("total");

  priceElement.textContent = "$" + totalPrice.toFixed(2);
  taxElement.textContent = "$" + tax.toFixed(2);
  totalElement.textContent = "$" + totalAmount.toFixed(2);

  // Store the total amount in localStorage
  localStorage.setItem("totalAmount", totalAmount.toFixed(2));

  // Store the selected items in localStorage
  var selectedItems = "";
  for (var i = 0; i < itemCards.length; i++) {
    var checkbox = itemCards[i].querySelector(".item-checkbox");
    if (checkbox.checked) {
      var itemName = itemCards[i].querySelector("h3").textContent;
      selectedItems += itemName + ", ";
    }
  }
  localStorage.setItem("selectedItems", selectedItems);

  // Display the selected items in the payment.html page
  var selectedItemsElement = document.getElementById("selected-items");
  if (selectedItemsElement) {
    selectedItemsElement.textContent = selectedItems;
  }
}

// Add event listener to the Add to Cart button
var addToCartBtn = document.getElementById("add-cart-btn");
addToCartBtn.addEventListener("click", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Redirect to the payment.html page
  window.location.href = "payment.html";
});
