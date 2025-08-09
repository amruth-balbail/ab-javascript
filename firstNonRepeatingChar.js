function firstNonRepeatingChar(str){
    const charCount = {};

    for (let i=0;i<str.length; i++) {
        const char = str[i];
    
    if (charCount[char] === undefined){
charCount[char] = 1 // first time seeing the character
}  else {
    charCount[char]++ // Already seen, so increase count
}
    }
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
}
return null;
}
console.log(firstNonRepeatingChar("aaddhhjjil"))