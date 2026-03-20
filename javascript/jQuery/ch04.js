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

  $(".package-green-button").on("click", function () {
    var price = $(this).closest(".package").data("price");
    var newp = $("<p>");
    newp.text("From $" + price);

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
