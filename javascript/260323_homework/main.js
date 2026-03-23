$().ready(function () {
  //요구사항 2번
  $(".load-git-users").on("click", function () {
    var fetchProm = fetch("https://api.github.com/users");

    fetchProm
      .then(function (jsonResponse) {
        // console.log(jsonResponse.json());
        return jsonResponse.json();
      })
      .then(function (body) {
        //요구사항 2번
        console.log(body);
        for (var i = 0; i < body.length; i++) {
          var comment = body[i];
          // console.log(comment);
          var li = $("<li>");
          // $(".posts").append(li);
          // console.log(li);

          //요구사항 4번
          var imgData = comment.avatar_url;
          var img = $('<img src="' + imgData + '"/>').css({
            height: "20rem",
            width: "20rem",
            "border-radius": "50%",
          });

          // 요구사항 5 & 6: login 값을 div에 넣고, 클릭 시 html_url로 이동하기
          var loginName = comment.login;
          var htmlUrl = comment.html_url;

          var loginDiv = $("<div>").text(loginName);

          (function (targetUrl) {
            loginDiv.on("click", function () {
              window.open(targetUrl);
            });
          })(htmlUrl);

          //요구사항 3번
          li.append(img).append(loginDiv);
          $(".posts").append(li);
        }
      });
  });
});

// 1. "08_ajax.html" 파일을 복사해 "본인이름.html" 로 붙여넣습니다.

// 2. 파일 내 ".load-git-users" 를 클릭하면 위 URL을 fetch 로 호출해 반환되는 데이터를 console 로 출력하도록 합니다.

// 3. 반환되는 데이터 중 객체 한개 마다 ".posts"의 li로 추가합니다.

// 4. 반환되는 데이터 중 "avatar_url" 의 값을 <img src="" /> 에 추가하고 이미지가 나오도록 합니다. (이미지는 완전한 동그라미로 나오도록 해보세요)

// 5. 반환되는 데이터 중 "login"의 값을 <div></div>에 추가하고 이름이 나오도록 합니다.

// 6. 반횐되는 데이터 중 "html_url"의 값을 5에서 만든 div를 클릭했을 때 이동하도록 이벤트를 생성합니다.
