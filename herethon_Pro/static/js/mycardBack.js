document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../img/card-pink.svg",
    "../img/card-yellow.svg",
    "../img/card-blue.svg",
  ];

  const cardsData = [
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
    card.style.backgroundImage = `url(${bgColor[index % bgColor.length]})`;

    // Function to truncate text and add ellipses if it exceeds maxLength
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
      } else {
        return text;
      }
    };

    card.innerHTML = `
            <a href="../html/mycardFront.html">
                <div class="first">
                    <div class="tags">
                        <div class="tag">${data.tagFirst}</div>
                        <div class="tag">${data.tagSecond}</div>
                        <div class="tag">${data.tagThird}</div>
                    </div>
                    <div class="titleZone">${data.title}</div>
                </div>
                <div class="main">
                    <div class="content" style="background-color: ${
                      contentZone[index % contentZone.length]
                    }">${truncateText(data.content, 100)}</div>
                    <div class="writeDate">${data.writeDate}</div>
                </div>
            </a>
            <a href="../html/cardFront.html">
                <div class="clickable-area">
                    <img src="${data.writerPhoto}" class="callerPhoto" />
                    <div class="whole">
                    <div class="top">
                        <div class="othersName">${data.writerName}</div>
                        <div class="relation">${data.relation}</div>
                    </div>
                    <div class="down">
                        <div class="belong">${data.writerBelong}</div>
                        <div class="detail">${data.writerJob}</div>
                    </div>
                    </div>
                    <div class="go">
                    <img src="../img/detailBtn.svg" />
                    </div>
                </div>
            </a>
              `;
    container.appendChild(card);

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

  if (toastBtn) {
    toastBtn.addEventListener("click", function () {
      console.log("이벤트가 잘 연결 됐는지 확인");
      toastOn();
    });
  }

  function toastOn() {
    toastMessage.classList.add("active");
    setTimeout(function () {
      toastMessage.classList.remove("active");
    }, 1000);
  }
});
