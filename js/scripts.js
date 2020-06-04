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
  $("form#add").submit(function(event){
    event.preventDefault();
    const numberAddition = parseInt($("#add1").val());
    const numberAddition2 = parseInt($("#add2").val());
    const result = add(numberAddition, numberAddition2);
    $("#outputAdd").text(result);
  });
  $("form#subtract").submit(function(event){
    event.preventDefault();
    const numberSubtract = parseInt($("#sub1").val());
    const numberSubtract2 = parseInt($("#sub2").val());
    const result2 = subtract(numberSubtract, numberSubtract2);
    $("#outputSubtract").text(result2);
  });
    $("form#multiply").submit(function(event){
      event.preventDefault();
      const numberMultiply = parseInt($("#mult1").val());
      const numberMultiply2 = parseInt($("#mult2").val());
      const result3 = multiply(numberMultiply, numberMultiply2);
      $("#outputMultiply").text(result3);
  });
      $("form#divide").submit(function(event){
        event.preventDefault();
        const numberDivide = parseInt($("#div1").val());
        const numberDivide2 = parseInt($("#div2").val());
        const result4 = divide(numberDivide, numberDivide2);
        $("#outputDivide").text(result4);
  // alert(convertToCelsius(number1).toFixed());
  });
  });