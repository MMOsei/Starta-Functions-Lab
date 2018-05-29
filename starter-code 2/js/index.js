console.log('Starting tests');

function addTwo(num1,num2){
  return num1 + num2;
}

function addThree(num1,num2,num3) {
  return num1 + num2 + num3;
}

function multiplyTwo(num1,num2) {
  return num1 * num2;
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}

function increaseByPercentage(num1,per) {
  return num1 + num1 * (per/100);
}

function celciusToFahrenheit(num1) {
  return num1 * 1.8 +32;
}

function fahrenheitToCelcius(num1) {
  return ((num1 - 32) * 5) / 9;
}

function stripVowels(word) {
  return word.replace(/[aeiou]/ig,'')
}

// function stripVowels() {
//   return word.split("a,e,i,o,u").join("")
// }

// do not delete
runTests();
