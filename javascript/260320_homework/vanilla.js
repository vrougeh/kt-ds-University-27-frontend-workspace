window.onload = function () {
  var createButton = document.querySelector(".create-content");
  var deleteAll = document.querySelector(".delete-all");
  var ul = document.querySelector("ul");
  var number = 0;
  var span = document.querySelector("span");

  createButton.addEventListener("click", function () {
    var listItem = document.createElement("li");
    listItem.innerText = "아이템 목록" + ++number;

    if (number < 10) {
      ul.appendChild(listItem);
      span.innerText = number;
    } else {
      alert("더 이상 추가할 수 없습니다.");
    }
  });

  deleteAll.addEventListener("click", function () {
    if (number === 0) {
      alert("이미 모든 아이템이 제거되었습니다.");
    } else {
      //   var listItems = ul.querySelectorAll("li");

      //   for (var i = 0; i < listItems.length; i++) {
      //     listItems[i].remove();
      //   }

      // listItems.forEach(function (li) {
      //   li.remove();
      // });

      // ul.replaceChildren();
      ul.innerHTML = "";
      number = 0;
      span.innerText = number;
    }
  });
};
