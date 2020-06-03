// Business Logic
const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const multiply = function (number1, number2) {
  return number1 * number2;
};

const divide = function (number1, number2) {
  return number1 / number2;
};

// const convertToCelsius = function (number1) {
//   return (number1-32) * (5/9)
// }

// User Interface Logic
$(document).ready(function() {
  const number1 = parseInt(prompt("Enter first number"));
  const number2 = parseInt(prompt("Enter second number:"));
  alert(add(number1, number2));
  // alert(convertToCelsius(number1).toFixed());

})