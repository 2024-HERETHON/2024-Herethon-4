document.addEventListener("DOMContentLoaded", function () {
  showRecv();
});

//롤링페이퍼 버튼
const sendState = document.querySelector(".rp-selector-send");
const recvState = document.querySelector(".rp-selector-recv");

//공유 버튼 클릭 시 현재 url 복사
function clip() {
  var url = "";
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
//공유 버튼 클릭 시 토스트창
const tostBtn = document.querySelector(".btn-share");
const tostMsg = document.querySelector(".tost-share");

function tostOn() {
  tostMsg.classList.add("active");
  setTimeout(function () {
    tostMsg.classList.remove("active");
  }, 1000);
}

tostBtn.addEventListener("click", function () {
  console.log("이벤트가 잘 연결 됐는지 확인");
  tostOn();
});

// 받은 롤링페이퍼 확인
function showRecv() {
  recvState.style.color = "white";
  recvState.style.borderBottom = "1px solid rgb(249,232,130)";
  sendState.style.color = "#8c8c8e";
  sendState.style.borderBottom = "1px solid rgb(63,63,67)";

  const sendOpacity = document.querySelector(".rp-recv-list");
  const recvOpacity = document.querySelector(".rp-send-list");
  recvOpacity.style.display = "none";
  sendOpacity.style.display = "";

  const fp = "/recvData.json";
  fetch(fp)
    .then((response) => response.json())
    .then((json) => {
      const data = json.user;
      const recvRp = document.querySelector(".rp-recv-list");

      recvRp.innerHTML = "";
      const colors = ["#F9E882", "#FCB05D", "#FFACD5", "#7A9EFF"];

      data.forEach((element, index) => {
        const bgColor = colors[index % colors.length];

        const newSendPaper = document.createElement("div");
        newSendPaper.className = "rp";
        newSendPaper.style.backgroundColor = bgColor;
        newSendPaper.dataset.id = element.id;

        newSendPaper.innerHTML = `
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword1}</div>
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword2}</div>
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword3}</div>
          <div class="rp-content">${element.title}</div>
          <div class="rp-relationship">${element.relationship}</div>
          <div class="rp-time">${element.time}</div>
        `;

        newSendPaper.addEventListener("click", () =>
          showDetails(element.id, fp)
        );

        sendRp.appendChild(newSendPaper);
      });
    });
}

function showSend() {
  const fp = "/sendData.json";
  // Update send/receive states
  sendState.style.color = "white";
  sendState.style.borderBottom = "1px solid rgb(249,232,130)";
  recvState.style.color = "#8c8c8e";
  recvState.style.borderBottom = "1px solid rgb(63,63,67)";

  // Toggle visibility of lists
  const sendOpacity = document.querySelector(".rp-recv-list");
  const recvOpacity = document.querySelector(".rp-send-list");
  sendOpacity.style.display = "none";
  recvOpacity.style.display = "";

  // Fetch data
  fetch(fp)
    .then((response) => response.json())
    .then((json) => {
      const data = json.user;
      const sendRp = document.querySelector(".rp-send-list");

      sendRp.innerHTML = "";
      const colors = ["#F9E882", "#FCB05D", "#FFACD5", "#7A9EFF"];

      data.forEach((element, index) => {
        const bgColor = colors[index % colors.length];

        const newSendPaper = document.createElement("div");
        newSendPaper.className = "rp";
        newSendPaper.style.backgroundColor = bgColor;
        newSendPaper.dataset.id = element.id;

        newSendPaper.innerHTML = `
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword1}</div>
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword2}</div>
          <div class="rp-kw" style="color: ${bgColor};">#${element.keyword3}</div>
          <div class="rp-content">${element.title}</div>
          <div class="rp-relationship">${element.relationship}</div>
          <div class="rp-time">${element.time}</div>
        `;

        newSendPaper.addEventListener("click", () =>
          showDetails(element.id, fp)
        );

        sendRp.appendChild(newSendPaper);
      });
    });
}

function showDetails(id, filepath) {
  fetch(filepath)
    .then((response) => response.json())
    .then((json) => {
      const data = json.user.find((element) => element.id === id);
      if (data) {
        const modal = document.querySelector(".modal");
        const detailKeywords = modal.querySelector(".detail-kw-wp");
        const detailTitle = modal.querySelector(".detail-title");
        const detailContent = modal.querySelector(".detail-content");
        const detailTime = modal.querySelector(".detail-time");
        const profName = modal.querySelector(".prof-name"); //발신자 이름 어떻게 받아와야되는지 모르겠음
        const profRelationship = modal.querySelector(".prof-relationship");
        const affiliation = modal.querySelector(".affiliation");
        const occupation = modal.querySelector(".occupation");

        detailKeywords.innerHTML = `
        <div class="detail-kw">#${data.keyword1}</div>
        <div class="detail-kw">#${data.keyword2}</div>
        <div class="detail-kw">#${data.keyword3}</div>
      `;
        detailTitle.textContent = data.title;
        detailContent.textContent = data.content;
        detailTime.textContent = data.time;
        profName.textContent = data.sender; //발신자 이름 json으로 받나?
        profRelationship.textContent = data.relationship;
        affiliation.textContent = data.affiliation;
        occupation.textContent = data.occupation;

        modal.style.display = "block";

        const backBtn = modal.querySelector(".backBtn");
        backBtn.addEventListener("click", goback);

        const blurBackground = modal.querySelector(".blur");
        blurBackground.addEventListener("click", (e) => {
          if (e.target === blurBackground) {
            goback();
          }
        });
      }
    });
}

const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", goback);

function goback() {
  console.log("back btn clicked!");
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
