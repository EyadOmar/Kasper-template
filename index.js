let navBtn = document.querySelector(".nav-btn");
let navLinks = document.querySelectorAll("nav .links li a");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBtn.classList.toggle("active");
  });
});
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
