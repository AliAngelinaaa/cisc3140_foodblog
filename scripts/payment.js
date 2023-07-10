window.addEventListener("load", function () {
  var selectedItems = sessionStorage.getItem("selectedItems");
  var totalAmount = sessionStorage.getItem("totalAmount");

  document.getElementById("selectedItems").innerText = selectedItems;
  document.getElementById("totalAmount").innerText = totalAmount;

  document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Perform payment processing logic here
    alert("Payment successful!");
    window.location.href = "verification.html";
  });
});

window.addEventListener("load", function () {
  document.getElementById("subButton").onclick = runSubmit;
  document.getElementById("name").oninput = validateName;
  document.getElementById("cardNumber").oninput = validateNumber;
  document.getElementById("expiration-date").oninput = validateDate;
  document.getElementById("cvc").oninput = validateCVC;
});

function runSubmit() {
  validateName();
  validateCredit();
  validateNumber();
  validateDate();
  validateCVC();
}

function validateDate() {
  var cardDate = document.getElementById("expDate");
  if (cardDate.validity.valueMissing) {
    cardDate.setCustomValidity("Enter the expiration date");
  } else if (/^(0[1-9]|1[0-2])\/20[12]\d$/.test(cardDate.value) === false) {
    cardDate.setCustomValidity("Enter a valid expiration date");
  } else {
    cardDate.setCustomValidity("");
  }
}

function validateName() {
  var cardName = document.getElementById("name");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Please enter your name");
  } else {
    cardName.setCustomValidity("");
  }
}

function validateCredit() {
  var creditCard = document.forms.credit.elements.company[0];
  if (creditCard.validity.valueMissing) {
    creditCard.setCustomValidity("Select the credit card you're using");
  } else {
    creditCard.setCustomValidity("");
  }
}

function validateNumber() {
  var cardNumber = document.getElementById("cardNumber");
  if (cardNumber.validity.valueMissing) {
    cardNumber.setCustomValidity("Enter your card number");
  } else if (cardNumber.validity.patternMismatch) {
    cardNumber.setCustomValidity("Enter a valid card number");
  } else if (luhn(cardNumber.value) === false) {
    cardNumber.setCustomValidity("Enter a legitimate card number");
  } else {
    cardNumber.setCustomValidity("");
  }
}

function validateCVC() {
  var cardCVC = document.getElementById("cvc");
  var creditCard = document.querySelector('input[name="company"]:checked').value;

  if (cardCVC.validity.valueMissing) {
    cardCVC.setCustomValidity("Enter your code CVC number");
  } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 4-digit CVC number");
  } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
    cardCVC.setCustomValidity("Enter a 3-digit CVC number");
  } else {
    cardCVC.setCustomValidity("");
  }
}

function sumDigits(numStr) {
  var digitTotal = 0;
  for (var i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}

function luhn(idNum) {
  var string1 = "";
  var string2 = "";

  // Retrieve the odd-numbered digits
  for (var i = idNum.length - 1; i >= 0; i -= 2) {
    string1 += idNum.charAt(i);
  }
  // Retrieve the even-numbered digits and double them
  for (var i = idNum.length - 2; i >= 0; i -= 2) {
    string2 += 2 * idNum.charAt(i);
  }

  // Return whether the sum of the digits is divisible by 10
  return sumDigits(string1 + string2) % 10 === 0;
}
