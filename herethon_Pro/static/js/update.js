document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".hashtag-btn");
  const options = document.querySelector(".option");
  const arrow = document.querySelector(".hashtag-btn > img");

  document.querySelector(".edit-button").addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });

  document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("userPhoto").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

  arrow.src = "../image/upArrow.svg";

  const selectTrigger = document.querySelector(".select-trigger");

  selectTrigger.addEventListener("click", function () {
    const customSelect = document.querySelector(".custom-select");
    customSelect.classList.toggle("open");
    this.classList.toggle("active"); // 클릭 시 보더 활성화
    arrow.src = customSelect.classList.contains("open")
      ? "../image/downArrow.svg"
      : "../image/upArrow.svg"; // 화살표를 상태에 따라 변경
  });

  document.querySelectorAll(".custom-option").forEach((option) => {
    option.addEventListener("click", function () {
      const selectedText = this.innerText;
      document.querySelector(".select-trigger span").innerText = selectedText;
      const customSelect = document.querySelector(".custom-select");
      customSelect.classList.remove("open");
      document.querySelector(".select-trigger").classList.remove("active");
      document.querySelector(".select-trigger").style.color = "white";
      document.querySelector(".select-trigger").style.fontWeight = "500";
      arrow.src = "../image/upArrow.svg"; // 선택 후 upArrow로 변경
    });
  });

  document.addEventListener("click", function (e) {
    const select = document.querySelector(".custom-select");
    const trigger = document.querySelector(".select-trigger");
    if (!select.contains(e.target) && !trigger.contains(e.target)) {
      // 수정: 트리거 요소도 포함
      select.classList.remove("open");
      trigger.classList.remove("active");
      arrow.src = "../image/upArrow.svg"; // 클릭 후 upArrow로 변경
    }
  });

  // const nameInput = document.getElementById("name");
  // const belongInput = document.getElementById("belong");
  // const jobInput = document.getElementById("job");
  // const submitButton = document.querySelector(".submit-button");

  // // let belongError = document.querySelector(".belongError");
  // // let jobError = document.querySelector(".jobError");

  // function checkInputs() {
  //   if (
  //     nameInput.value.trim() !== "" &&
  //     belongInput.value.trim() !== "" &&
  //     jobInput.value.trim() !== ""
  //   ) {
  //     submitButton.style.backgroundColor = "#f9e882";
  //     submitButton.style.transition = "ease-in-out 300ms";
  //     submitButton.style.color = "#2f2f32";
  //     submitButton.disabled = false;
  //   } else {
  //     submitButton.style.backgroundColor = "";
  //     submitButton.style.color = "";
  //     submitButton.disabled = true; // 버튼 비활성화
  //   }
  // }

  // nameInput.addEventListener("input", checkInputs);
  // belongInput.addEventListener("input", checkInputs);
  // jobInput.addEventListener("input", checkInputs);

  // // 초기 상태에서도 체크
  // checkInputs();

  // 모달 창 노출 js 코드
  const modal = document.querySelector(".modal");
  const modalOpen = document.querySelector(".deleteBtn");
  const modalClose = document.querySelector(".close");
  const cardDelete = document.querySelector(".delete");

  modalOpen.addEventListener("click", function () {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  cardDelete.addEventListener("click", function () {
    window.location.href = "myCard.html";
  });
});
