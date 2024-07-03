document.addEventListener("DOMContentLoaded", () => {
  function truncateText(element, maxLength) {
    if (element.textContent.length > maxLength) {
      element.textContent = element.textContent.slice(0, maxLength) + "...";
    }
  }

  const myName = document.querySelector(".myName");
  const myAffiliation = document.querySelector(".myAffiliation");
  const myJob = document.querySelector(".myJob");
  const myKeyword = document.querySelector(".myKeyword");

  truncateText(myName, 3);
  truncateText(myAffiliation, 8);
  truncateText(myJob, 8);
  truncateText(myKeyword, 5);

  let toastMessage = document.getElementById("toast-message");
  let toastBtn = document.getElementsByClassName("shareBtn")[0];

  toastBtn.addEventListener("click", function () {
    console.log("이벤트가 잘 연결 됐는지 확인");
    toastOn();
  });

  function toastOn() {
    toastMessage.classList.add("active");
    setTimeout(function () {
      toastMessage.classList.remove("active");
    }, 1000);
  }
});
