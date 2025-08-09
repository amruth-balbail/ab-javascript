function countVowels(input) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = input.toLowerCase().split("");
  for (i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("radsgvasghad"));
