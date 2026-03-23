$().ready(function () {
  var number = 0;
  $(".create-content").on("click", function () {
    if (number >= 9) {
      alert("더 이상 추가할 수 없습니다.");
    } else {
      $("ul").append($("<li>").text("아이템 목록 " + ++number));
      // console.log("아이템 추가 ", number);
      $(".bottom-content > span").text(number);
    }
  });

  $(".delete-all").on("click", function () {
    if (!number) {
      alert("이미 모든 아이템이 제거되었습니다.");
    } else {
      $("li").remove();
      number = 0;
      $(".bottom-content > span").text(number);
    }
  });
});
