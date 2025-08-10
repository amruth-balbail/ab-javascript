function getCardType(cardNumber) {
  const digits = cardNumber.replace(/\D/g, "");
  const length = digits.length;

  const cardPatterns = [
    { type: "Visa", pattern: /^4/, lengths: [13, 16, 19] },
    { type: "Mastercard", pattern: /^5/, lengths: [16, 19] },
    { type: "American Express", pattern: /^3/, lengths: [15] },
  ];

 for (let i = 0; i < cardPatterns.length; i++) {
   if (
     cardPatterns[i].pattern.test(digits) &&
     cardPatterns[i].lengths.includes(length)
   ) {
     return cardPatterns[i].type;
   }
 }

  // If no pattern matched, return 'Other'
  return "Other";
}

// Test examples
console.log(getCardType("4532015112830366")); // Visa
console.log(getCardType("5500005555555559")); // Mastercard
console.log(getCardType("371449635398431")); // American Express
console.log(getCardType("6011111111111117")); // Other
console.log(getCardType("1234567890123456")); // Other
