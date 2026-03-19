//String에 contains 라는 기능을 추가한다.
String.prototype.contains = function (findText) {
  console.log(findText);
  console.log(this);
  return this.indexOf(findText) >= 0;
};
//Object에 print라는 기능 추가
Object.prototype.print = function () {
  console.log("객체의 내용 : ", this);
};
var tempObject = {};
tempObject.print(); //위의 코드로 print를 추가하여 error가 뜨지 않음
console.dir(tempObject);

var text = "asdflkjiweofpwqi";
text.print();

window.onload = function () {
  var text = "abcdefg abcdefg";
  console.log(String);
  console.dir(String);
  // text = text.replaceAll("a", "A");
  //   console.log(text);
  var contain = text.contains("a");
  console.log(contain);

  var list = document.querySelector(".list");
  var listItems = [
    { tagName: "li", text: "first", class: "list-item" },
    { tagName: "li", text: "second", class: "list-item" },
    { tagName: "li", text: "third", class: "list-item" },
  ];
  listItems.print();

  for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    item.print();
    var eachItem = document.createElement(item.tagName);
    eachItem.className = item.class;
    eachItem.innerText = item.text;

    list.appendChild(eachItem);
  }

  // ECMA
  //   function calc2({ n1 = 0, n2 = 0, n3 = 0 }) {
  //     return n1 + n2 + n3;
  //   }
  //   var result = calc2({ n1: 1, n3: 3 });
  //   console.log(result);

  function calc(param) {
    return (param.n1 || 0) + (param.n2 || 0) + (param.n3 || 0);
  }

  var result = calc({ n1: 1, n3: 3 });
  console.log(result);

  function getObject() {
    return {
      price: 4116313,
      name: "asdfasd",
      model: "erptuep",
      fan: 8,
      chain: ["asdf", "qwer", "zxcv", "exc"],
      address: {
        city: "asdf",
        state: "uiop",
      },
    };
  }

  var headphone = {
    // serial-number: "SN123456", - 해당방법 불가
    "serial-number": "SN123456",
    mac_num: "asdf64asd4",
    modelName: "XM-5",
    manufacture: "Sony",
    type: "over-ear",
    power: false,
    powerOn: function () {
      console.log(this.modelName, "이 켜집니다");
      this.power = true;
    },
    powerOff: function () {
      console.log(this.modelName, "이 꺼집니다");
      this.power = false;
    },
  };

  console.log(headphone, typeof headphone);

  console.log(headphone.modelName, headphone["modelName"]);

  console.log(headphone["serial-number"]);
  console.log(headphone.mac_num);
  //   console.log(headphone.serial-number); - 해당방법 불가

  headphone.powerOn();
  console.log(headphone.power);
  headphone.powerOff();
  console.log(headphone.power);
};
