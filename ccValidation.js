function validateCreditCardNumber(input) {
  // remove non digit chars
  let digits = input.replace(/\D/g, "");

  // length check
  if (digits.length < 13 || digits.length > 19) {
    return { valid: false, message: "invalid credit card number" };
  }

  // Luhn's algo cehck
  if (!luhnCheck(digits)) {
    return { valid: false, message: "failed lunh's check" };
  }

  // mask creditCard
  let masked = maskCardNumber(digits);
  return { valid: true, message: `Valid card: ${masked}` };
}

function maskCardNumber(cardNumber) {
  // mask first 12 digits
  let maskedSection = "*".repeat(cardNumber.length - 4);
  let unmaskedSection = cardNumber.slice(-4);
  return maskedSection + unmaskedSection;
}

function luhnCheck(cardNumber) {
  let arr = cardNumber.split("").map(Number);
  let sum = 0;
  for (i = arr.length - 1; i >= 0; i = i - 2) {
    let digit = arr[i];
    if ((arr.length - i) % 2 === 0) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit - 9;
      }
      sum = sum + digit;
    }
    return sum % 10 === 0;
  }
}

console.log(validateCreditCardNumber("4531562436115246"));
