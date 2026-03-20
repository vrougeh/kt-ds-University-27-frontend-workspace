$().ready(function () {
  // 새로운 p 태그를 만든다 내용은 after
  // 새로운 p 태그는 wrapper 바깥 아래쪽에 위치한다.
  // var newp1 = $("<p>");
  // newp1.text("after");
  // $(".wrapper").after(newp1);
  $(".wrapper").after($("<p>").text("after"));

  // 새로운 p 태그를 만든다 내용은 before
  // 새로운 p 태그는 wrapper 바깥 위쪽에 위치한다.
  var newp2 = $("<p>");
  newp2.text("before");
  $(".wrapper").before(newp2);
  // 새로운 p 태그를 만든다 내용은 prepend
  // 새로운 p 태그는 wrapper 안쪽 위에 위치한다.
  var newp3 = $("<p>");
  newp3.text("prepend");
  $(".wrapper").prepend(newp3);
  // 새로운 p 태그를 만든다 내용은 append
  // 새로운 p 태그는 wrapper 안쪽 아래쪽에 위치한다.
  var newp4 = $("<p>");
  newp4.text("append");
  $(".wrapper").append(newp4);

  //새로운 div 태그를 만든다. 내용은 "newDiv"
  //새로운 div 태그는 ".a" 바깥 아래쪽에 위치한다.
  $(".a").after($("<div>").text("newDiv"));

  //새로운 div 태그를 만든다. 내용은 "newDiv2"
  //새로운 div 태그는 ".c" 바깥 위쪽에 위치한다.
  $(".c").before($("<div>newDiv2</div>"));

  //새로운 div 태그를 만든다. 내용은 "newSpan"
  //새로운 div 태그는 ".b" 안쪽 아래쪽에 위치한다.
  var newSpan = $("<span>");
  newSpan.text("newSpan");
  $(".b").append(newSpan);
});
