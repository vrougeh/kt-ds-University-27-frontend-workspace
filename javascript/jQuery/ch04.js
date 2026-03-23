$().ready(function () {
  $(".contact").on("click", function () {
    // console.log($(this).prev().children().find(".package-deal-comment").text());
    // console.log($(this).prev().find(".package-deal-comment").text());
    $(this)
      .prev()
      .find(".package-deal-comment")
      .each(function () {
        console.log($(this).text());
      });
  });

  //.ready() 이후 동적으로 만들어진 p 태그는 적용되지않는다. -24번줄로
  // $(".package-button-area")
  //   .find("p")
  //   .on("click", function () {
  //     alert($(this).text());
  //   });

  //package-button-area 안에 새롭게 생성된 p 에게 click 이벤트를 할당한다
  $(".package-button-area").on("click", "p", function () {
    alert($(this).text());
  });

  $(".package-green-button").on("click", function () {
    var price = $(this).closest(".package").data("price");
    var newp = $("<p>");
    newp.text("From $" + price);
    //p 태그가 만들어진 이후에 선언을 하여 이벤트를 적용되게 한다. 하지만 복잡해지므로 다른 방법을 사용 할 수 있다. 대신 추적은 쉽다. -20번줄로
    // newp.on("click", function () {
    //   alert($(this).text());
    // });

    //새롭게 만든 p태그에게 inline style을 부여한다.
    // newp.css({ color: "#fff" });
    //새롭게 만든 p태그에게 ch04.css에 있는 ".white-color" 클래스를 부여한다.
    newp.addClass("white-color");

    $(this).after(newp);
    $(this).remove();
    // $(this).after($("<p>").text("Form $399.99"));
    //   $(".package-green-button").after($("<p>Form $399.99</>"));
    //   $(".package-green-area").append($("<p>").text("Form $399.99"));
  });
});
