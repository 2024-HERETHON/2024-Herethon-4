document.addEventListener("DOMContentLoaded", function () {
  showRecv();
});

const sendState = document.querySelector(".rp-selector-send");
const recvState = document.querySelector(".rp-selector-recv");

//공유 버튼 클릭 시 토스트창
const tostBtn = document.querySelector(".btn-kakao");
const tostMsg = document.querySelector(".tost-share");
function tostOn() {
  tostMsg.classList.add("active");
  setTimeout(function () {
    tostMsg.classList.remove("active");
  }, 1000);
}

tostBtn.addEventListener("click", function () {
  tostOn();
});

// 받은 롤링페이퍼 확인
function showRecv() {
  recvState.style.color = "white";
  recvState.style.borderBottom = "1px solid rgb(249,232,130)";
  sendState.style.color = "#8c8c8e";
  sendState.style.borderBottom = "1px solid rgb(63,63,67)";

  const sendOpacity = document.querySelector(".rp-send-list");
  const recvOpacity = document.querySelector(".rp-recv-list");
  recvOpacity.style.display = "";
  sendOpacity.style.display = "none";
}
function showSend() {
  sendState.style.color = "white";
  sendState.style.borderBottom = "1px solid rgb(249,232,130)";
  recvState.style.color = "#8c8c8e";
  recvState.style.borderBottom = "1px solid rgb(63,63,67)";

  const sendOpacity = document.querySelector(".rp-send-list");
  const recvOpacity = document.querySelector(".rp-recv-list");
  sendOpacity.style.display = "";
  recvOpacity.style.display = "none";

}

function goback() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//프로필 클릭 시 명함으로 이동하는 코드 추가해야 함
