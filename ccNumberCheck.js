function validateCreditCardNumber(input) {
  // Remove all non-digit characters
  input = input.replace(/\D/g, "");

  // Length check: must be between 13 and 19
  if (input.length < 13 || input.length > 19) {
    return false;
  }

  // Convert to array of integers
  let creditCardInt = input.split("").map(Number);

  // Luhn algorithm: double every second digit from the right
  for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
    let tempValue = creditCardInt[i] * 2;
    if (tempValue > 9) {
      tempValue = (tempValue % 10) + 1;
    }
    creditCardInt[i] = tempValue;
  }

  // Sum all digits
  let total = 0;
  for (let i = 0; i < creditCardInt.length; i++) {
    total = total + creditCardInt[i];
  }

  // Valid if sum % 10 === 0
  return total % 10 === 0;
}

// Test cases
console.log(validateCreditCardNumber("4532015112830366")); // true
console.log(validateCreditCardNumber("4532015112830316")); // false
console.log(validateCreditCardNumber("123")); // false (too short)
console.log(validateCreditCardNumber("45320151128303668888")); // false (too long)
