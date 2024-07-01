document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".hashtag-btn");
  const options = document.querySelector(".option");
  const arrow = document.querySelector(".hashtag-btn > img");

  // 기본 상태에서 upArrow.svg 사용
  arrow.src = "../image/upArrow.svg";

  toggleBtn.addEventListener("click", function () {
    options.classList.toggle("show");
    arrow.src = options.classList.contains("show")
      ? "../image/downArrow.svg"
      : "../image/upArrow.svg";
    toggleBtn.classList.toggle("active");
  });

  options.addEventListener("click", function (event) {
    if (event.target.classList.contains("option-btn")) {
      toggleBtn.textContent = event.target.textContent;
      toggleBtn.style.color = "#fff"; // 텍스트 색상 흰색으로 변경
      options.classList.remove("show");
      arrow.src = "../image/upArrow.svg"; // 화살표를 upArrow로 변경
      toggleBtn.classList.remove("active");
      checkInputs(); // 입력 체크 함수 호출
    }
  });

  document.addEventListener("click", function (event) {
    if (!toggleBtn.contains(event.target) && !options.contains(event.target)) {
      options.classList.remove("show");
      arrow.src = "../image/upArrow.svg";
      toggleBtn.classList.remove("active");
    }
  });

  const belongInput = document.getElementById("belong");
  const jobInput = document.getElementById("job");
  const submitButton = document.querySelector(".submit-button");

  function checkInputs() {
    if (belongInput.value.trim() !== "" && jobInput.value.trim() !== "") {
      submitButton.style.backgroundColor = "#f9e882";
      submitButton.style.transition = "ease-in-out 300ms";
      submitButton.style.color = "#2f2f32";
      submitButton.disabled = false;
    } else {
      submitButton.style.backgroundColor = "";
      submitButton.style.color = "";
      submitButton.disabled = true; // 버튼 비활성화
    }
  }

  belongInput.addEventListener("input", checkInputs);
  jobInput.addEventListener("input", checkInputs);

  // 초기 상태에서도 체크
  checkInputs();
});
