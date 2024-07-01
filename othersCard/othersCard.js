document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../image/card-pink.png",
    "../image/card-yellow.png",
    "../image/card-blue.png",
  ];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

  const cardsData = [
    {
      userName: "홍길동이",
      birthDate: "2000.00.00",
      belong: "가나대학교",
      job: "학생/UX디자이너",
      hashtag: "#주도적인",
      avatar: "../image/avatar.png",
    },
    {
      userName: "동길홍",
      birthDate: "1999.01.01",
      belong: "다라마바사아대학교",
      job: "학생/개발자",
      hashtag: "#혁신적인",
      avatar: "../image/avatar2.png",
    },
    {
      userName: "길동홍",
      birthDate: "2001.01.01",
      belong: "마바대학교",
      job: "학생/디자이너",
      hashtag: "#도전정신가득한",
      avatar: "../image/avatar3.png",
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

  let startX, endX;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    if (startX - endX > 50) {
      if (currentIndex < cardsData.length - 1) {
        showCard(currentIndex + 1);
      }
    } else if (endX - startX > 50) {
      if (currentIndex > 0) {
        showCard(currentIndex - 1);
      }
    }
  }

  let tostMessage = document.getElementById("tost-message");
  let tostBtn = document.getElementsByClassName("shareBtn")[0];

  //2. 토스트 메시지 노출-사라짐 함수 작성
  function tostOn() {
    tostMessage.classList.add("active");
    setTimeout(function () {
      tostMessage.classList.remove("active");
    }, 1000);
  }

  //3. 토스트 버튼에 이벤트 연결
  tostBtn.addEventListener("click", function () {
    console.log("이벤트가 잘 연결 됐는지 확인");
    tostOn();
  });
});
