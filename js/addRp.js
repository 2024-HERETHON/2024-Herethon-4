function checkByte(input, maxByte) {
  let byteCount = 0;
  for (let i = 0; i < input.value.length; i++) {
    const charCode = input.value.charCodeAt(i);
    byteCount += charCode > 127 ? 2 : 1;
  }
  const byteCountSpan = input.nextElementSibling;
  const errorMessage = byteCountSpan.nextElementSibling;

  if (byteCount > maxByte) {
    input.classList.add("input-error");
    errorMessage.textContent = "입력하신 내용을 다시 확인해 주세요";
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorMessage.style.display = "none";
    byteCountSpan.style.color = "#8c8c8e";
    input.style.color = "white";
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
  const inputs = document.querySelectorAll(".input-title, .rp-content");
  inputs.forEach((input) => {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    input.parentNode.appendChild(errorMessage);

    input.addEventListener("keyup", (event) => {
      const maxByte = input.classList.contains("rp-content") ? 228 : 18;
      checkByte(event.target, maxByte);
    });
  });

  updateButtonState();
});
