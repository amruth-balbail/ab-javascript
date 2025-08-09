function maskCreditCardNumber(input) {
  // Remove all non-digit characters
  let digits = input.replace(/\D/g, "");

  // If the number is too short, just return as is
  if (digits.length <= 4) {
    return digits;
  }

  // Mask all but last 4 digits
  let maskedSection = "*".repeat(digits.length - 4);
  let visibleSection = digits.slice(-4);

  // Combine masked and visible parts
  return maskedSection + visibleSection;
}

// Test cases
console.log(maskCreditCardNumber("4532015112830366")); // ************0366
console.log(maskCreditCardNumber("4532-0151-1283-0366")); // ************0366
console.log(maskCreditCardNumber("4532 0151 1283 0366")); // ************0366
