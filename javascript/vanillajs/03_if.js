window.onload = function () {
  var randomNumber = parseInt(Math.random() * 10);
  console.log(randomNumber);

  //   if (randomNumber == 0) {
  //   console.log("연산할 수 없는 숫자입니다.");
  //   } else {
  //   console.log("0보다 큰 값입니다.");
  //   }
  if (randomNumber) {
    console.log("0보다 큰 값입니다.");
  } else {
    console.log("연산할 수 없는 숫자입니다.");
  }

  var name = "";
  if (name) {
    console.log("name의 값이 있습니다");
  } else {
    console.log("name의 값이 없습니다");
  }

  var age; //undefined
  if (age) {
    console.log("age 값이 있습니다");
  } else {
    console.log("age 값이 없습니다");
  }

  var address = null;
  if (address) {
    console.log("address 값이 있습니다");
  } else {
    console.log("address 값이 없습니다");
  }

  var arr = [];
  if (arr) {
    console.log("arr 값이 있습니다");
  } else {
    console.log("arr 값이 없습니다");
  }

  //같다 비교
  //javascript의 값 동등비교 ==,===
  //값 비교
  console.log(1 == 1); //true
  console.log(1 == 1.0); //true
  console.log("1" == 1.0); //true
  console.log("a" == "a"); //true

  //값 + 타입 비교
  console.log(1 === 1, typeof 1); //true
  console.log(1 === 1.0, typeof 1, typeof 1.0); //true
  console.log("1" === 1, typeof "1", typeof 1.0); //false
  console.log("a" === "a", typeof "a"); //true

  var a = [1, 2, 3, 4, 5, 6];
  var v = a.splice(1, 2);
  console.log(v);
};
