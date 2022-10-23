// hamburger menu

let menu = document.querySelector(".header__hamburger-menu");
let nav = document.querySelector(".header__nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

// slideshow

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");

  if (window.innerWidth <= 1050) {
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}
