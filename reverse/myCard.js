document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../img/card-pink.svg",
    "../img/card-yellow.svg",
    "../img/card-blue.svg",
  ];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

  const cardsData = [
    {
      myName: "홍길동이",
      myBirth: "2000.00.00",
      myAffiliation: "가나대학교",
      myJob: "학생/UX디자이너",
      myHashtag: "#주도적인",
      myAvatar: "../img/initPhoto.svg",
    },
    {
      myName: "홍길동",
      myBirth: "1999.01.01",
      myAffiliation: "다라마바사아대학교",
      myJob: "학생/개발자",
      myHashtag: "#혁신적인",
      myAvatar: "../img/initPhoto.svg",
    },
    {
      myName: "홍길동",
      myBirth: "2001.01.01",
      myAffiliation: "마바대학교",
      myJob: "학생/디자이너",
      myHashtag: "#도전정신가득한",
      myAvatar: "../img/initPhoto.svg",
    },
  ];

  const othersData = [
    {
      tagFirst: "#키워드",
      tagSecond: "#키워드",
      tagThird: "#키워드",
      title: "제목",
      content: "길동이는 착하고 배려심이 깊은 친구입니다.",
      writeDate: "2024.07.03",
      writerPhoto: "../img/borderPhoto.svg",
      writerName: "김철수",
      relation: "친구",
      writerBelong: "가나대학교",
      writerJob: "학생/UX디자이너",
    },
    {
      tagFirst: "#키워드",
      tagSecond: "#키워드",
      tagThird: "#키워드",
      title: "제목",
      content: "길동이는 착하고 배려심이 깊은 친구입니다.",
      writeDate: "2024.07.03",
      writerPhoto: "../img/borderPhoto.svg",
      writerName: "김철수",
      relation: "친구",
      writerBelong: "가나대학교",
      writerJob: "학생/UX디자이너",
    },
    {
      tagFirst: "#키워드",
      tagSecond: "#키워드",
      tagThird: "#키워드",
      title: "제목",
      content: "길동이는 착하고 배려심이 깊은 친구입니다.",
      writeDate: "2024.07.03",
      writerPhoto: "../img/borderPhoto.svg",
      writerName: "김철수",
      relation: "친구",
      writerBelong: "가나대학교",
      writerJob: "학생/UX디자이너",
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
          <div class="tag">${othersData[index].tagFirst}</div>
          <div class="tag">${othersData[index].tagSecond}</div>
          <div class="tag">${othersData[index].tagThird}</div>
        </div>
        <div class="titleZone">${othersData[index].title}</div>
      </div>
      <div class="main">
        <div class="content" style="background-color: ${
          contentZone[index % contentZone.length]
        }">${truncateText(othersData[index].content, 100)}</div>
        <div class="writeDate">${othersData[index].writeDate}</div>
      </div>
      <a href="./othersCard.html">
        <div class="clickable-area">
          <img src="${
            othersData[index].writerPhoto
          }" alt="callerPhoto" class="callerPhoto" />
          <div class="whole">
            <div class="top">
              <div class="othersName">${othersData[index].writerName}</div>
              <div class="relation">${othersData[index].relation}</div>
            </div>
            <div class="down">
              <div class="belong">${othersData[index].writerBelong}</div>
              <div class="detail">${othersData[index].writerJob}</div>
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
