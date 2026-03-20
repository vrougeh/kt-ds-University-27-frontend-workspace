//vanilla js
// window.onload = function () {
//   var dest = document.querySelectorAll("#destinations");
//   console.log(dest);
//   var listItems = dest.children;
//   console.log(listItems);
//   for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function (event) {
//       console.dir(event.target);

//       console.log("클릭한 태그의 내용", event.target.innerText);
//       console.log(
//         "클릭한 태그의 이전 태그의 내용",
//         event.target.previousElementSibling.innerText,
//       );
//       console.log(
//         "클릭한 태그의 다음 태그의 내용",
//         event.target.nextElementSibling.innerText,
//       );
//       console.log(
//         "클릭한 태그의 부모 태그의 내용",
//         event.target.parentElement.innerText,
//       );
//     });
//   }
// };

$().ready(function () {
  //   var dest = document.querySelectorAll("#destinations");
  //   var listItems = dest.children;
  // console.log(listItems);
  var listItems = $("#destinations").children("li");
  console.log(listItems);
  //listItems[i].addEventListener("click", function (event) {})
  listItems.on("click", function () {
    //console.log("클릭한 태그의 내용", event.target.innerText);
    console.log("클릭한 태그의 내용", $(this).text());
    //클릭한 태그의 이전 태그의 내용
    console.log("클릭한 이전 태그의 내용", $(this).prev().text());
    //클릭한 태그의 이후 태그의 내용
    console.log("클릭한 이후 태그의 내용", $(this).next().text());
    //클릭한 태그의 부모 태그의 내용
    console.log("클릭한 이후 부모 태그의 내용", $(this).parent().text());
  });
});
