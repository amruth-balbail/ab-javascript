function formatCreditCardNumber(digits) {
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 4 === 0) {
      result = result + " ";
    }
    result = result + digits[i];
  }
  return result;
}

// tests
console.log(formatCreditCardNumber("4532015112830366"));
