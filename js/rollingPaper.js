document.addEventListener("DOMContentLoaded", function () {
  showRp();
  const setModal = document.querySelector(".modal");
  setModal.style.display = "none";
});
const backBtn = document.querySelector(".btn-back");
backBtn.addEventListener("click", () => {
  window.open("/html/admin.html", "_self");
}); // 수정: 어디로 이동해야하는지?

const addBtn = document.querySelector(".btn-add");
addBtn.addEventListener("click", () => {
  window.open("/html/addRp.html", "_self");
});

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
  tostOn();
});

// 받은 롤링페이퍼 확인
function showRp() {
  fetch("/userData.json")
    .then((response) => response.json())
    .then((json) => {
      const data = json.user;
      const rp = document.querySelector(".rp-list");

      rp.innerHTML = "";
      const colors = ["#F9E882", "#FCB05D", "#FFACD5", "#7A9EFF"];

      data.forEach((element, index) => {
        const bgColor = colors[index % colors.length];

        const newPaper = document.createElement("div");
        newPaper.className = "rp";
        newPaper.style.backgroundColor = bgColor;
        newPaper.dataset.id = element.id;

        newPaper.innerHTML = `
            <div class="rp-kw" style="color: ${bgColor};">#${element.keyword1}</div>
            <div class="rp-kw" style="color: ${bgColor};">#${element.keyword2}</div>
            <div class="rp-kw" style="color: ${bgColor};">#${element.keyword3}</div>
            <div class="rp-content">${element.title}</div>
            <div class="rp-relationship">${element.relationship}</div>
            <div class="rp-time">${element.time}</div>
          `;

        newPaper.addEventListener("click", () =>
          showDetails(element.id, "/userData.json")
        );

        rp.appendChild(newPaper);
      });
    });
}

function showDetails(id, fp) {
  const colors = ["#F9E882", "#FCB05D", "#FFACD5", "#7A9EFF"];
  const contentBgColors = {
    "#F9E882": "#fdf2af",
    "#FCB05D": "#FFD19B",
    "#FFACD5": "#FFD2E5",
    "#7A9EFF": "#AFC5FD",
  };

  fetch(fp)
    .then((response) => response.json())
    .then((json) => {
      const data = json.user.find((element) => element.id === id);
      if (data) {
        const modal = document.querySelector(".modal");
        const detailKeywords = modal.querySelector(".detail-kw-wp");
        const detailTitle = modal.querySelector(".detail-title");
        const detailContent = modal.querySelector(".detail-content");
        const detailTime = modal.querySelector(".detail-time");
        const profName = modal.querySelector(".prof-name");
        const profRelationship = modal.querySelector(".prof-relationship");
        const affiliation = modal.querySelector(".affiliation");
        const occupation = modal.querySelector(".occupation");
        const detailTop = modal.querySelector(".detail-top");
        const detailBot = modal.querySelector(".detail-bot");

        const index = json.user.findIndex((element) => element.id === id);
        const bgColor = colors[index % colors.length];
        const contentBgColor = contentBgColors[bgColor] || bgColor;

        modal.style.backgroundColor = bgColor;
        detailTop.style.backgroundColor = bgColor;
        detailBot.style.backgroundColor = bgColor;
        detailContent.style.backgroundColor = contentBgColor;

        detailKeywords.innerHTML = `
            <div class="detail-kw" style="color: ${bgColor};">#${data.keyword1}</div>
            <div class="detail-kw" style="color: ${bgColor};">#${data.keyword2}</div>
            <div class="detail-kw" style="color: ${bgColor};">#${data.keyword3}</div>
          `;
        detailTitle.textContent = data.title;
        detailContent.textContent = data.content;
        detailTime.textContent = data.time;
        profName.textContent = data.sender;
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
function goback() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//프로필 클릭 시 명함으로 이동하는 코드 추가해야 함
//작성화면으로 넘어가는 코드 추가, 뒤로가기 추가, 모달창 명함바로가기 추가