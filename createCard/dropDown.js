document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const options = document.querySelector(".selectbox-option");
  const arrow = document.querySelector(".toggle-btn > img");

  // 기본 상태에서 downArrow.svg 사용
  arrow.src = "../image/upArrow.svg";

  toggleBtn.addEventListener("click", function () {
    options.classList.toggle("show"); // 'show' 클래스 토글
    arrow.src = options.classList.contains("show")
      ? "../image/downArrow.svg"
      : "../image/upArrow.svg";
  });

  options.addEventListener("click", function (event) {
    if (event.target.classList.contains("option-btn")) {
      toggleBtn.textContent = event.target.textContent;
      options.classList.remove("show"); // 'show' 클래스 제거
      arrow.src = "../image/upArrow.svg";
    }
    hashtagArrow;
  });
});
