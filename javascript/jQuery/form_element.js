// var runMode = "vanilla";
var runMode = "jquery";

$().ready(function () {
  if (runMode === "jquery") {
    var email = $("#email");
    console.log(email.val());
    email.val("askdfhas");

    $("#jobs").on("change", function () {
      console.log($(this).val());
      console.log($(this).children("option:selected").text());
    });

    $("input[type='radio'][name='age']").on("change", function () {
      console.log($(this).val(), $(this).prop("checked"));
    });

    $("#checked-all").on("change", function () {
      $("input[type='checkbox'][name='favorate-genre']").prop(
        "checked",
        $(this).prop("checked"),
      );
    });
    $("input[type='checkbox'][name='favorate-genre']").on(
      "change",
      function () {
        //체크박스의 개수 세기
        var checkbox = $("input[type='checkbox'][name='favorate-genre']");
        var checkboxCount = checkbox.length;

        //체크한 체크박스의 개수 세기
        // $("input[type='checkbox'][name='favorate-genre']:checked");
        // var checkedCount = $(
        //   "input[type='checkbox'][name='favorate-genre']",
        // ).filter(":checked").length;
        var checkedCount = checkbox.filter(":checked").length;

        $("#checked-all").prop("checked", checkboxCount === checkedCount);
      },
    );
  }
});

window.onload = function () {
  if (runMode === "vanilla") {
    //모든 form tag 공통
    var email = this.document.querySelector("#email").value;
    console.log(email);
    this.document.querySelector("#email").value = "changeemail";

    var jobs = this.document.querySelector("#jobs").value;
    console.log(jobs); // 0 - selected가 없다면 0 선택 단 value가 없으면 text를 뱉음
    // select 태그에서 option의 value가 3인것을 선택해라
    this.document.querySelector("#jobs").value = "3";
    // 사용자가 select 태그에서 option을 변경했을 때
    // 해당 값을 출력해라
    this.document
      .querySelector("#jobs")
      .addEventListener("change", function () {
        console.log(this.value);
        console.log(
          this.querySelector("option[value = '" + this.value + "']").innerText,
        );
      });

    // this.document
    //   .querySelector("input[type='radio'][name='age']")
    //   .addEventListener("click", function () {
    //     //클릭한 radio의 선택상태를 콘솔에 출력
    //     console.log(this.value, this.checked);
    //   });

    var radios = this.document.querySelectorAll(
      "input[type='radio'][name='age']",
    );
    //radio event(click) - 클릭할때
    // for (var i = 0; i < radios.length; i++) {
    //   radios[i].addEventListener("click", function () {
    //   // 클릭한 radio의 선택상태를 콘솔에 출력
    //     console.log(this.value, this.checked);
    //   });
    // }
    //radio event(change) - 선택될때
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener("change", function () {
        // 선택상태가 변경된 radio의 선택상태를 콘솔에 출력
        console.log(this.value, this.checked);
      });
    }

    var checkboxes = this.document.querySelectorAll(
      "input[type='checkbox'][name='favorate-genre']",
    );

    var checkedAll = this.document.querySelector("#checked-all");
    checkedAll.addEventListener("change", function () {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
      }
    });

    for (var i in checkboxes) {
      if (!isNaN(i)) {
        // console.log(i, checkboxes[i]);
        checkboxes[i].addEventListener("change", function () {
          //체크박스의 선택 상태가 변경될 때 마다 체크된 체크박스의 개수를 조회하여 출력
          var checkedCount = 0;
          //checkboxes 다시 한 번 반복
          for (var index = 0; index < checkboxes.length; index++) {
            if (checkboxes[index].checked) {
              checkedCount++;
            }
          }

          checkedAll.checked = checkboxes.length === checkedCount;

          console.log(checkedCount, "개의 체크박스가 선택됨");
          //체크된것만 출력을 한다(value)
          // 없으면 해제할때도 출력됨
          if (this.checked) {
            console.log(this.value, this.checked);
          }
        });
      }
    }
  }
};
