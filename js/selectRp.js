document.addEventListener("DOMContentLoaded", function () {
  showRp();
  const setModal = document.querySelector(".modal");
  setModal.style.display = "none";
});

const sendState = document.querySelector(".rp-selector-send");
const recvState = document.querySelector(".rp-selector-recv");
let selectedRp = null;
let clickCount = 0;

const selectBtn = document.querySelector(".selectBtn");
selectBtn.style.transition = "background-color 300ms ease-in-out";
// 받은 롤링페이퍼 확인
function showRp() {
  fetch("/userData.json")
    .then((response) => response.json())
    .then((json) => {
      const data = json.user;
      const rp = document.querySelector(".rp-list");

      rp.innerHTML = "";

      data.forEach((element, index) => {
        const bgColor = "#353538";
        const innerColor = "#D3D3D3";
        const newPaper = document.createElement("div");
        newPaper.className = "rp";
        newPaper.style.backgroundColor = bgColor;
        newPaper.dataset.id = element.id;

        newPaper.innerHTML = `
              <div class="rp-kw" style="color: ${innerColor};">#${element.keyword1}</div>
              <div class="rp-kw" style="color: ${innerColor};">#${element.keyword2}</div>
              <div class="rp-kw" style="color: ${innerColor};">#${element.keyword3}</div>
              <div class="rp-content">${element.title}</div>
              <div class="rp-relationship">${element.relationship}</div>
              <div class="rp-time">${element.time}</div>
            `;

        newPaper.addEventListener("click", () => {
          toggleSelection(newPaper, element.id);
        });
        rp.appendChild(newPaper);
      });
    });
}

function toggleSelection(rpElement, id) {
  const selectedBgColor = "#F9E882";
  const selectedTextColor = "#2F2F32";
  const unselectedBgColor = "#353538";
  const unselectedKwColor = "#D3D3D3";

  if (selectedRp && selectedRp !== rpElement) {
    // 이전 선택된 롤링페이퍼의 색상 원상복귀
    resetRpStyle(selectedRp, unselectedBgColor, unselectedKwColor);
    selectedRp = null;
    clickCount = 0;
  }

  clickCount++;

  if (clickCount === 1) {
    // 새로운 롤링페이퍼 선택 시 색상 변경
    rpElement.style.backgroundColor = selectedBgColor;
    rpElement.querySelectorAll(".rp-kw").forEach((kw) => {
      kw.style.color = selectedBgColor;
    });
    rpElement.querySelector(".rp-content").style.color = selectedTextColor;
    rpElement.querySelector(".rp-relationship").style.color = selectedTextColor;
    rpElement.querySelector(".rp-time").style.color = selectedTextColor;
    selectedRp = rpElement;
    activateSelectBtn(true);
  } else if (clickCount >= 2) {
    showDetails(id, "/userData.json");
  }
}

function resetRpStyle(rpElement, bgColor, kwColor) {
  rpElement.style.backgroundColor = bgColor;
  rpElement.querySelectorAll(".rp-kw").forEach((kw) => {
    kw.style.color = kwColor;
  });
  rpElement.querySelector(".rp-content").style.color = kwColor;
  rpElement.querySelector(".rp-relationship").style.color = kwColor;
  rpElement.querySelector(".rp-time").style.color = kwColor;
}

function activateSelectBtn(activate) {
  if (activate) {
    selectBtn.style.backgroundColor = "#F9E882";
    selectBtn.style.cursor = "pointer";
  } else {
    selectBtn.style.backgroundColor = "transparent";
    selectBtn.style.cursor = "default";
  }
}

function showDetails(id, fp) {
  const bgColor = "#F9E882";
  const contentBgColor = "#fdf2af";

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
  clickCount = 1;
}

// 프로필 클릭 시 명함으로 이동하는 코드 추가해야 함
// 작성화면으로 넘어가는 코드 추가, 뒤로가기 추가, 모달창 명함바로가기 추가
