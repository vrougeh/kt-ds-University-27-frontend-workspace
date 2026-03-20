//vanilla js
// window.onload = function () {
//   var h1 = document.querySelector("h1");
//   console.log(h1.innerText);

//   h1.innerText = "어디로 가고 싶으세요?";
// };

//jquery
// = window.onload = function () {~~};
// jQuery(document).ready(function () {
//   alert("렌더링 준비 끝");
// });

//Shorten 표현식
// $(document).ready(function () {
//   alert("렌더링 준비 끝");
// });

// $().ready(function () {
//   alert("렌더링 준비 끝");
// });

// $(function () {
//   alert("렌더링 준비 끝");
// });

$().ready(function () {
  // = var h1 = document.querySelector("h1");
  var h1 = $("h1");

  // = console.log(h1.innerText);
  console.log(h1.text());

  // = h1.innerText = "어디로 가고 싶으세요?";
  h1.text("어디로 가고 싶으세요?");

  //p 태그의 내용을 가져와서 alert로 출력
  // var p = $("p");
  // alert(p.text());
  alert($("p").text());
  //p 태그의 내용을 "다음 여행을 계획해 보세요"라고 변경
  $("p").text("다음 여행을 계획해 보세요");
});
