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

const convertToCelsius = function (number1) {
  return (number1-32) * (5/9)
}


const number1 = parseInt(prompt("Enter farhenheit to convert to celsius:"));
// const number2 = parseInt(prompt("Enter another number:"));

alert(convertToCelsius(number1).toFixed());