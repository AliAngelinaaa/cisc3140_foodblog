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


window.addEventListener("DOMContentLoaded", function () {
  const itemGrid = document.querySelector(".item-grid");

  products.forEach(function (product) {
    const itemCard = document.createElement("div");
    itemCard.className = "item-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.className = "item-image";

    const label = document.createElement("label");
    const name = document.createElement("h3");
    name.textContent = product.name;
    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = product.name;
    checkbox.value = product.price;
    checkbox.className = "item";
    checkbox.addEventListener("change", calculateTotal);

    label.appendChild(name);
    label.appendChild(price);
    label.appendChild(checkbox);

    itemCard.appendChild(image);
    itemCard.appendChild(label);

    itemGrid.appendChild(itemCard);
  });
});


function calculateTotal() {
  var selectedItems = [];
  var totalAmount = 0;
  
  var checkboxes = document.getElementsByClassName("item");
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          selectedItems.push(checkboxes[i].name);
              totalAmount += parseInt(checkboxes[i].value);
      }
  }
  
  var tax = totalAmount * 0.08;
  var totalPrice = totalAmount + tax;
  
  document.getElementById("selectedItems").innerText = "Selected Item(s):" + selectedItems.join(", ");
  document.getElementById("taxNum").innerText = "Tax: $" + tax.toFixed(2);
  document.getElementById("totalAmount").innerText = "Total Amount: $" + totalPrice.toFixed(2);
  
  // Store the order details in sessionStorage
  sessionStorage.setItem("selectedItems", selectedItems.join(", "));
  sessionStorage.setItem("taxNum", tax.toFixed(2));
  sessionStorage.setItem("totalAmount", totalPrice.toFixed(2));
}

document.getElementById("storeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  window.location.href = "payment.html";
});
