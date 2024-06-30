document.addEventListener("DOMContentLoaded", () => {
  const cardsData = [
    {
      userName: "홍길동",
      birthDate: "2000.00.00",
      belong: "가나대학교",
      job: "학생/UX디자이너",
      hashtag: "#주도적인",
      hashtagColor: "#ff77ba",
      avatar: "./avatar.png",
      background: "card-pink.png",
    },
    {
      userName: "동길홍",
      birthDate: "1999.01.01",
      belong: "다라대학교",
      job: "학생/개발자",
      hashtag: "#혁신적인",
      hashtagColor: "#FCB05D",
      avatar: "./avatar2.png",
      background: "card-yellow.png",
    },
    {
      userName: "길동홍",
      birthDate: "2001.01.01",
      belong: "마바대학교",
      job: "학생/디자이너",
      hashtag: "#창의적인",
      hashtagColor: "#5583FF",
      avatar: "./avatar3.png",
      background: "card-blue.png",
    },
  ];

  const container = document.getElementById("cards-container");
  const dotsContainer = document.getElementById("dots");

  cardsData.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${data.background})`;
    card.innerHTML = `
        <div class="info">
          <div class="infoLeft">
            <div class="userName">${data.userName}</div>
            <div class="birthDate">${data.birthDate}</div>
            <div class="belong">${data.belong}</div>
            <div class="job">${data.job}</div>
          </div>
          <div class="infoRight">
            <div class="hashtag">${data.hashtag}</div>
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

  function showCard(index) {
    const dots = document.querySelectorAll(".dot");
    container.style.transform = `translateX(-${index * 110}%)`;
    dots[currentIndex].classList.remove("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  cardsData.forEach((data, index) => {
    const hashtags = document.querySelectorAll(".hashtag");
    hashtags[index].style.color = data.hashtagColor;
  });
});
