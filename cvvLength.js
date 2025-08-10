function isValidCVV(cvv, cardType) {
  // Convert to string in case it's passed as a number
  const cvvStr = String(cvv);

  // Define CVV length rules
  const rules = {
    visa: /^[0-9]{3}$/, // Visa: 3 digits
    mastercard: /^[0-9]{3}$/, // MasterCard: 3 digits
    amex: /^[0-9]{4}$/, // Amex: 4 digits
  };

  // Normalize cardType (case-insensitive)
  cardType = cardType.toLowerCase();

  if (!rules[cardType]) {
    throw new Error(`Unsupported card type: ${cardType}`);
  }

  return rules[cardType].test(cvvStr);
}

// Examples:
console.log(isValidCVV("123", "Visa")); // true
console.log(isValidCVV("1234", "Amex")); // true
console.log(isValidCVV("12", "MasterCard")); // false
console.log(isValidCVV("abcd", "Visa")); // false
