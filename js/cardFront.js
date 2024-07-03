document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../img/card-pink.svg",
    "../img/card-yellow.svg",
    "../img/card-blue.svg",
  ];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

  const cardsData = [
    {
      userName: "김철수가",
      birthDate: "2000.00.00",
      belong: "가나대학교",
      job: "학생/UX디자이너",
      hashtag: "#주도적인",
      avatar: "../img/initPhoto.svg",
    },
    {
      userName: "김철수",
      birthDate: "1999.01.01",
      belong: "다라마바사아대학교",
      job: "학생/개발자",
      hashtag: "#혁신적인",
      avatar: "../img/initPhoto.svg",
    },
    {
      userName: "김철수",
      birthDate: "2001.01.01",
      belong: "마바대학교",
      job: "학생/디자이너",
      hashtag: "#도전정신가득한",
      avatar: "../img/initPhoto.svg",
    },
  ];

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
            <a href="../html/cardBack.html">
              <div class="info">
                <div class="infoLeft">
                  <div class="userName">${truncateText(data.userName, 3)}</div>
                  <div class="birthDate">${data.birthDate}</div>
                  <div class="belong">${truncateText(data.belong, 8)}</div>
                  <div class="job">${truncateText(data.job, 8)}</div>
                </div>
                <div class="infoRight">
                  <div class="hashtag" style="color: ${
                    htColor[index % htColor.length]
                  }">
                    ${truncateText(data.hashtag, 5)}
                  </div>
                </div>
              </div>
              <img src="${data.avatar}" alt="Avatar" class="avatar" />
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
