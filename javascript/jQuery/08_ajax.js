// https://jsonplaceholder.typicode.com/comments

$().ready(function () {
  $(".load-comments").on("click", function () {
    $(".spinner").show();
    //비동기로 https://jsonplaceholder.typicode.com/comments 호출
    //window.fetch(url); ==> Promise 반환. (서버에서 아직 데이터가 전달되지 않은 상태)
    var fetchProm = fetch("https://jsonplaceholder.typicode.com/comments");
    // pending ==> 서버에게 http 요청을 징행중인 상태
    // fulfilled ==> 서버가 fetch 에게 http 요청에 대한 값을 반환 완료한 상태
    // ==> 서버로부터 정상적으로 반환되었다 ==> fetchProm.then()
    // ==> 서버로부터 에러가 반환되었다 ==> fetchProm.catch()

    // 서버로 보낸 http 요청이 서버로부터 정상적으로 처리되어 값이 반환시킨 경우
    // 서버가 반환시킨값을 console로 출력해본다
    fetchProm
      .then(function (jsonResponse /* 서버가 fetch 에게 변화시킨 값  */) {
        //jsonResponse.json() ==> 비동기 처리 (Promise가 반환되었으므로)
        // console.log(jsonResponse.json());
        return jsonResponse.json();
      })
      .then(function (body /*jsonResponse.json()이 반환시킨 값*/) {
        console.log(body);
        for (var i = 0; i < body.length; i++) {
          var comment = body[i];
          var bodyComment = comment.body;

          var li = $("<li>").text(bodyComment);
          $(".comments").append(li);
        }
        $(".spinner").hide();
      });

    //일정 주기로 함수를 실행하는 함수
    // setInterval(function () {
    //   console.log(fetchProm);
    // }, 100);
  });
});

// window.onload = function () {
//   var button = this.document.querySelector(".call-promise");

//   button.addEventListener("click", function () {
//     var delay = parseInt(Math.random() * 10000);

//     var prom = new Promise(function (resolve, reject) {
//       //비동기 코드 실행
//       setTimeout(function () {
//         if (delay % 2 === 0) {
//           reject(delay);
//         } else {
//           resolve(delay);
//         }
//       }, delay);
//     });

//     prom
//       .then(function (delay) {
//         //resolve
//         alert(delay);
//       })
//       .catch(function (delay) {
//         //reject
//         console.log("에러발생", delay);
//       });

//     console.log(prom);

//     // setTimeout(function () {
//     //   try {
//     //     if (delay % 2 === 0) {
//     //       throw new Error("에러가 발생했습니다.");
//     //     }
//     //     alert(delay);
//     //   } catch (e) {
//     //     console.log(e.message, delay);
//     //   }
//     // }, delay);
//   });
// };
