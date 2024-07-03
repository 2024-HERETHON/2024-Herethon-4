document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../img/card-pink.svg",
    "../img/card-yellow.svg",
    "../img/card-blue.svg",
  ];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

  const cardsData = [
    {
      myName: "김김철수",
      myBirth: "2000.00.00",
      myAffiliation: "가나대학교",
      myJob: "학생/UX디자이너",
      myHashtag: "#주도적인",
      myAvatar: "../img/initPhoto.svg",
    },
    {
      myName: "김철수",
      myBirth: "1999.01.01",
      myAffiliation: "다라마바사아대학교",
      myJob: "학생/개발자",
      myHashtag: "#혁신적인",
      myAvatar: "../img/initPhoto.svg",
    },
    {
      myName: "김철수",
      myBirth: "2001.01.01",
      myAffiliation: "마바대학교",
      myJob: "학생/디자이너",
      myHashtag: "#도전정신가득한",
      myAvatar: "../img/initPhoto.svg",
    },
  ];

  const othersData = [
    {
      othersName: "홍길동",
      othersBirth: "2000.00.00",
      othersAffiliation: "가나대학교",
      othersJob: "학생/UX디자이너",
      othersHashtag: "#주도적인",
      othersAvatar: "../img/initPhoto.svg",
    },
    {
      othersName: "홍길동",
      othersBirth: "1999.01.01",
      othersAffiliation: "다라마바사아대학교",
      othersJob: "학생/개발자",
      othersHashtag: "#혁신적인",
      othersAvatar: "../img/initPhoto.svg",
    },
  ];

  const contentZone = ["#FFD2E5", "#FDF2AF", "#AFC5FD"];

  const container = document.getElementById("cards-container");
  const dotsContainer = document.getElementById("dots");

  cardsData.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.style.backgroundImage = `url(${bgColor[index % bgColor.length]})`;

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
      } else {
        return text;
      }
    };

    cardFront.innerHTML = `
        <div class="info">
          <div class="infoLeft">
            <div class="myName">${truncateText(data.myName, 3)}</div>
            <div class="myBirth">${data.myBirth}</div>
            <div class="myAffiliation">${truncateText(
              data.myAffiliation,
              8
            )}</div>
            <div class="myJob">${truncateText(data.myJob, 8)}</div>
          </div>
          <div class="infoRight">
            <div class="myHashtag" style="color: ${
              htColor[index % htColor.length]
            }">
              ${truncateText(data.myHashtag, 5)}
            </div>
          </div>
        </div>
        <img src="${data.myAvatar}" alt="Avatar" class="myAvatar" />
      `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.style.backgroundImage = `url(${bgColor[index % bgColor.length]})`;
    cardBack.innerHTML = `
        <div class="first">
          <div class="tags">
            <div class="tag">#키워드</div>
            <div class="tag">#키워드</div>
            <div class="tag">#키워드</div>
          </div>
          <div class="titleZone">제목</div>
        </div>
        <div class="main">
          <div class="content" style="background-color: ${
            contentZone[index % contentZone.length]
          }">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </div>
          <div class="writeDate">2024.07.02</div>
        </div>
        <a href="../html/othersCard.html">
          <div class="clickable-area">
            <img src="../img/borderPhoto.svg" alt="callerPhoto" class="callerPhoto" />
            <div class="whole">
              <div class="top">
                <div class="othersName">홍길동</div>
                <div class="relation">친구</div>
              </div>
              <div class="down">
                <div class="belong">다라대학교</div>
                <div class="detail">백엔드 개발자</div>
              </div>
            </div>
            <div class="go">
              <img src="../img/detailBtn.svg" />
            </div>
          </div>
        </a>
      `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    container.appendChild(card);

    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showCard(index));
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const cardWidth = 320;
  function showCard(index) {
    const dots = document.querySelectorAll(".dot");
    container.style.transform = `translateX(-${index * cardWidth}px)`;
    dots[currentIndex].classList.remove("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

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
