//vanilla js
// window.onload = function () {
//   //모든 li 태그를 가져와서 내용을 서울로 변경한다.
//   var listItems = document.querySelectorAll("li");
//   console.log(listItems);
//   for (let i = 0; i < listItems.length; i++) {
//     listItems[i].innerText = "seoul";
//   }
// };

$().ready(function () {
  $("li").text("seoul");
  //   $("li").first().text("seoul");
  //   $("li").first().next().text("seoul");
  //   $("li").eq(1).text("seoul");

  //클래스가 promo 인것의 텍스트를 "부산" 으로 변경한다.
  $(".promo").text("busan");

  //아이디가 "destinations"인 태그의 자식 요소 중 두번째 li의 텍스트를 "경주"로 변경한다.
  //   $("#destinations > li").eq(1).text("경주");
  //   $("#destinations  li").eq(1).text("경주");
  $("#destinations > li:nth-child(2)").text("경주");
});
