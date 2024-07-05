document.addEventListener("DOMContentLoaded", function () {
  showRecv();
  const setModal = document.querySelector(".modal");
  setModal.style.display = "none";
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
document.addEventListener('DOMContentLoaded', function() {
  const colors = {
      "#F9E882": "#fdf2af",
      "#FCB05D": "#FFD19B",
      "#FFACD5": "#FFD2E5",
      "#7A9EFF": "#AFC5FD"
  };

  const colorKeys = Object.keys(colors);
  const rollingPapers = document.querySelectorAll('.rp');
  const modal = document.querySelector('.modal');
  const detailTop = modal.querySelector('.detail-top');
  const detailBot = modal.querySelector('.detail-bot');
  const detailContent = modal.querySelector('.detail-content');
  const backBtn = document.querySelector('.backBtn');
  const blur = document.querySelector('.blur');

  // 롤링페이퍼 클릭 시 이벤트 처리
  rollingPapers.forEach((rp, index) => {
      const color = colorKeys[index % colorKeys.length];
      rp.style.backgroundColor = color;
      const keywords = rp.querySelectorAll('.rp-kw');
      keywords.forEach(keyword => {
          keyword.style.color = color;
      });

      rp.addEventListener('click', function() {
          modal.style.display = 'block';
          detailTop.style.backgroundColor = color;
          detailBot.style.backgroundColor = color;
          detailContent.style.backgroundColor = colors[color];

          // 클릭된 롤링페이퍼의 배경색에 맞게 detail-kw 요소의 색상 설정
          const detailKws = modal.querySelectorAll('.detail-kw');
          detailKws.forEach(detailKw => {
              detailKw.style.color = color;
          });
      });
  });

  // 모달 닫기 이벤트 처리
  backBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  blur.addEventListener('click', function(event) {
      if (event.target === blur) {
          modal.style.display = 'none';
      }
  });
});

function goback() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//프로필 클릭 시 명함으로 이동하는 코드 추가해야 함
