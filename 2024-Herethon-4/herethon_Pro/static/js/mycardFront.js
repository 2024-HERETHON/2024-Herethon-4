// document.addEventListener("DOMContentLoaded", () => {
//   const bgColor = [
//     "../img/card-pink.svg",
//     "../img/card-yellow.svg",
//     "../img/card-blue.svg",
//   ];
//   const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

//   let currentIndex = 0;
//   const cardWidth = 320;
//   const container = document.getElementById("cards-container");
//   const dotsContainer = document.getElementById("dots");

//   function showCard(index) {
//     const dots = document.querySelectorAll(".dot");
//     container.style.transform = `translateX(-${index * cardWidth}px)`;
//     dots[currentIndex].classList.remove("active");
//     dots[index].classList.add("active");
//     currentIndex = index;
//   }

//   let toastMessage = document.getElementById("toast-message");
//   let toastBtn = document.getElementsByClassName("shareBtn")[0];

//   toastBtn.addEventListener("click", function () {
//     console.log("이벤트가 잘 연결 됐는지 확인");
//     toastOn();
//   });

//   function toastOn() {
//     toastMessage.classList.add("active");
//     setTimeout(function () {
//       toastMessage.classList.remove("active");
//     }, 1000);
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const bgColor = [
    "../img/cardpink.svg",
    "../img/cardyellow.svg",
    "../img/cardblue.svg",
  ];
  const htColor = ["#ff77ba", "#FCB05D", "#5583FF"];

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

    // container.appendChild(card);

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
