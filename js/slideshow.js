const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
var slideIndex;

function addSlides(n) {
  showSlides(slideIndex += n);
}

function setSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > (slides.length - 1)) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (const item of slides) {
      item.style.display = "none";
  }
  for (const item of dots) {
      item.className = item.className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function slideLoop() {
  addSlides(1);
  setTimeout(slideLoop, 10000);
}

setSlide(0);
setTimeout(slideLoop, 10000);
