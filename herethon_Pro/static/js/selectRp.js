document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".rp");
  const selectBtn = document.querySelector(".selectBtn");

  // Initially hide all detail buttons
  articles.forEach((article) => {
    article.querySelector(".details-btn").style.display = "none";
  });

  articles.forEach((article) => {
    article.addEventListener("click", function () {
      // Reset styles for all articles
      articles.forEach((a) => {
        a.style.backgroundColor = "#353538";
        a.style.border = "none";
        a.querySelectorAll(".rp-kw").forEach(
          (kw) => (kw.style.color = "#D3D3D3")
        );
        a.querySelector(".rp-content").style.color = "#D3D3D3";
        a.querySelector(".rp-relationship").style.color = "#D3D3D3";
        a.querySelector(".rp-time").style.color = "#D3D3D3";
        a.querySelector(".details-btn").style.display = "none";
      });

      // Apply styles to the selected article
      this.style.backgroundColor = "#F9E882";
      this.style.border = "2px solid #FFDB00";
      this.querySelectorAll(".rp-kw").forEach(
        (kw) => (kw.style.color = "#F9E882")
      );
      this.querySelector(".rp-content").style.color = "#2F2F32";
      this.querySelector(".rp-relationship").style.color = "#2F2F32";
      this.querySelector(".rp-time").style.color = "#2F2F32";
      this.querySelector(".details-btn").style.display = "block";

      // Update select button styles
      selectBtn.style.backgroundColor = "#F9E882";
      selectBtn.style.color = "#2F2F32";
    });
  });
});
