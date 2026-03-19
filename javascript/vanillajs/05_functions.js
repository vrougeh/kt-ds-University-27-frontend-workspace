window.onload = function () {
  //즉시실행함수 - 함수생성하자마자 스스로 실행시키는 함수
  (function (number) {
    console.log("즉시실행함수 입니다.", number);
  })(100);

  var list = document.querySelector(".list");
  console.log(list); //값출력
  console.dir(list); //값의 구조 출력

  console.log(list.dataset.count);
  var datacount = parseInt(list.dataset.count);

  //.list에 datacount의 수만큼 li 태그를 생성한다
  for (var i = 0; i < datacount; i++) {
    (function (number) {
      //li태그를 생성하고 내부 텍스트는 i + 1 한 값으로 세팅
      var eachItem = document.createElement("li");
      // eachItem.innerText = i + 1;
      eachItem.innerText = number;

      // 즉시실행함수가 아닐때 어떤걸 클릭해도 11(10+1)이 나오는 원인 - for문이 끝난 후 클릭해 호출함
      //1. event parameter 받아와서 출력하기
      //2. 즉시실행함수를 이용해서 출력하기
      eachItem.addEventListener("click", function () {
        // alert(i + 1);
        alert(number);
      });
      //생성된 li 태그를 .list에 추가한다.
      list.appendChild(eachItem);
    })(i + 1);
  }
  // callback
  // 주로 비동기 또는 이벤트 핸들링에서 사용하는 함수의 표현식
  // 비동기의 특징 :
  // 1. 어떤 함수가 시작하는 시간 또는 지점. 어떤 함수가 종료되는 시간또는 지점이 명확하지 않은 코드의 형태
  // 2. 정상적인 코드 흐름에서 분리된 형태.(모든코드는 위에서 아래로 실행. 하나의 명령이 종료되어야 다음명령이 실행된다)
  // --> 하나의 명령이 종료되지 않은 상태에서 다음 코드가 실행된다

  //함수를 변수에 할당
  var printMessage = function (message) {
    console.log(message);
  };
  console.log(printMessage, typeof printMessage);
  //변수에 할당된 함수를 호출
  printMessage("asdfsad");

  function printSumResult(from, to, endFunction) {
    //setTimeout(함수,지연시간)
    setTimeout(function () {
      var sum = 0;
      for (var i = from; i <= to; i++) {
        sum += i;
      }
      console.log(sum);
      endFunction(sum);
    }, 1000);
  }

  printSumResult(1, 1_000_000_000, function (sum) {
    alert("결과는 " + sum + "입니다.");
  });

  printSumResult(1_000, 1_000_000_000, function (sum) {
    if (confirm("결과가 나왔습니다. 확인하세요")) {
      alert(sum);
    }
  });

  function printCalcResult(number1, number2, operator) {
    if (operator === "+") {
      var result = getAddResult(number1, number2);
      console.log(result);
    } else if (operator === "-") {
      var result = getSubResult(number1, number2);
      console.log(result);
    } else if (operator === "/") {
      var result = getDivideResult(number1, number2);
      console.log(result);
    } else if (operator === "*") {
      var result = getMultipleicateResult(number1, number2);
      console.log(result);
    }
    function getAddResult(number1, number2) {
      return number1 + number2;
    }
    function getSubResult(number1, number2) {
      return number1 - number2;
    }
    function getDivideResult(number1, number2) {
      return number1 / number2;
    }
    function getMultipleicateResult(number1, number2) {
      return number1 * number2;
    }
  }

  printCalcResult(10, 20, "+");
  printCalcResult(10, 20, "-");
  printCalcResult(10, 20, "/");
  printCalcResult(10, 20, "*");

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
