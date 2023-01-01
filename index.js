let navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});

// Landing Background Images
// for Later
// const landing = document.querySelector(".landing");
// const landingArrows = document.querySelectorAll(".landing-arrows");
// const imagesUrls = [
//   "../images/landing-1.jpg",
//   "../images/landing-2.jpg",
//   "../images/landing-3.jpg",
// ];

// landingArrows.forEach((arrow, num) => {
//   arrow.addEventListener("click", () => {
//     let currentImg = landing.style.backgroundImage;
//     console.log(currentImg);
//   });
// });

//portofolio active filter
let filters = document.querySelectorAll(".portfolio .filter li");
switchActive(filters, ".portfolio .filter li.active");

//portofolio active photo
let figures = document.querySelectorAll(".portfolio .gallery figure");
switchActive(figures, ".portfolio .gallery figure.active");

function switchActive(elements, activeQuery) {
  elements.forEach((ele) => {
    ele.addEventListener("click", () => {
      let activeElement = document.querySelector(activeQuery);
      activeElement.classList.remove("active");

      ele.classList.add("active");
    });
  });
}
