const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
var slideIndex, i;

function addSlides(n) {
  showSlides(slideIndex += n);
}

function setSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > (slides.length - 1)) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
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
