window.onload = function () {
  function addAll() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  function calc(num1, num2) {
    console.log(arguments);
    return num1 + num2;
  }
  var result = addAll(351, 321, 5, 1, 4, 8486, 4, 46, 1, 1);
  console.log(result);

  var result = calc(10, 30);
  console.log(result);

  var result = calc(10, 30, 100);
  console.log(result);

  var result = calc(10);
  console.log(result);

  var result = calc();
  console.log(result);
};
