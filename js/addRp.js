const backBtn = document.querySelector(".btn-back");
backBtn.addEventListener("click", () => {
  window.open("/html/rollingPaper.html", "_self");
});
//사용자별 id값 알아와서 경로 뒤에 추가하는 방식으로 변경
function checkByte(input, maxByte) {
  let byteCount = 0;
  for (let i = 0; i < input.value.length; i++) {
    const charCode = input.value.charCodeAt(i);
    byteCount += charCode > 127 ? 2 : 1;
  }
  const byteCountSpan = input.nextElementSibling;
  const errorMessage = byteCountSpan ? byteCountSpan.nextElementSibling : null;

  if (byteCountSpan) {
    byteCountSpan.textContent = `${byteCount}byte`;
  }

  if (byteCount > maxByte) {
    input.classList.add("input-error");
    if (byteCountSpan) {
      byteCountSpan.classList.add("exceed");
    }
    if (errorMessage) {
      errorMessage.textContent = "입력하신 내용을 다시 확인해 주세요";
      errorMessage.style.display = "block";
    }
  } else {
    input.classList.remove("input-error");
    if (byteCountSpan) {
      byteCountSpan.classList.remove("exceed");
    }
    if (errorMessage) {
      errorMessage.style.display = "none";
    }
  }

  updateButtonState();
}

function updateButtonState() {
  const titleInput = document.querySelector(".input-title");
  const contentInput = document.querySelector(".rp-content");
  const addBtn = document.querySelector(".addBtn");

  const isTitleValid =
    !titleInput.classList.contains("input-error") &&
    titleInput.value.trim() !== "";
  const isContentValid =
    !contentInput.classList.contains("input-error") &&
    contentInput.value.trim() !== "";

  if (isTitleValid && isContentValid) {
    addBtn.style.backgroundColor = "#F9E882";
    addBtn.style.color = "black";
    addBtn.style.pointerEvents = "auto";
  } else {
    addBtn.style.backgroundColor = "";
    addBtn.style.pointerEvents = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("rp");
  const maxBytes = {
    "rp-content": 228,
    "input-title": 25,
  };

  textarea.addEventListener("input", function () {
    checkByte(textarea, maxBytes["rp-content"]);
  });

  const titleInput = document.querySelector(".input-title");
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  titleInput.parentNode.appendChild(errorMessage);

  titleInput.addEventListener("input", (event) => {
    checkByte(event.target, maxBytes["input-title"]);
  });

  updateButtonState();
});
