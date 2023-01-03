//Header
//-----------
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

//Landind
//-----------
let landing = document.querySelector(".landing");
let landingImgs = [
  "./images/landing-1.jpg",
  "./images/landing-2.jpg",
  "./images/landing-3.jpg",
];
let imgsNum = landingImgs.length;
let currentImg = Math.round(imgsNum / 2) - 1;
let bullets = document.querySelector(".landing .bullets");

//Next and prevoius buttons
let prev = document.querySelector(".left-arrow");
let next = document.querySelector(".right-arrow");
next.onclick = nextSlide;
prev.onclick = prevSlide;

//Bullets Indicating current picture
for (let i = 0; i < imgsNum; i++) {
  li = document.createElement("li");
  bullets.appendChild(li);
}
let bulletsLis = document.querySelectorAll(".bullets li");
bulletsLis.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    if (i < currentImg) prevSlide();
    else nextSlide();
  });
});
bulletsLis[currentImg].classList.add("active");

//Portofolio
//-----------
//portofolio active filter
let filters = document.querySelectorAll(".portfolio .filter li");
switchActive(filters, ".portfolio .filter li.active");
//portofolio active photo
let figures = document.querySelectorAll(".portfolio .gallery figure");
switchActive(figures, ".portfolio .gallery figure.active");

// add fig description
let figCaptions = document.querySelectorAll(".portfolio .gallery figcaption");
figures.forEach((fig, i) => {
  const figType = fig.dataset.type;
  const desc = document.createElement("p");
  desc.textContent = figType;
  figCaptions[i].appendChild(desc);
});

// filter images according filter
filters.forEach((filter) => {
  filter.addEventListener("click", filterFigure);
});

// if u press all u get all figures
filters[0].addEventListener("click", () => {
  figures.forEach((figure) => {
    figure.classList.remove("shrink");
  });
});

function nextSlide() {
  bulletsLis[currentImg].classList.remove("active");
  currentImg += 1;
  if (currentImg === imgsNum) currentImg = 0;
  landing.style.backgroundImage = `url(${landingImgs[currentImg]})`;
  bulletsLis[currentImg].classList.add("active");
}
function prevSlide() {
  bulletsLis[currentImg].classList.remove("active");
  currentImg -= 1;
  if (currentImg === -1) currentImg = imgsNum - 1;
  landing.style.backgroundImage = `url(${landingImgs[currentImg]})`;
  bulletsLis[currentImg].classList.add("active");
}
function switchActive(elements, activeQuery) {
  elements.forEach((ele) => {
    ele.addEventListener("click", () => {
      let activeElement = document.querySelector(activeQuery);
      activeElement.classList.remove("active");

      ele.classList.add("active");
    });
  });
}
function filterFigure(e) {
  figures.forEach((figure) => {
    // all appear
    figure.classList.remove("shrink");

    // match types of filter and image
    const figureType = figure.dataset.type;
    const filterType = e.target.dataset.type;

    //Images that doesnot match shrink
    if (figureType !== filterType) figure.classList.add("shrink");
  });
}
