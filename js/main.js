const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const titles = document.querySelectorAll(".posts h1");
var slideIndex, i, headingHeight;

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

function adjustHeadingHeights() {
  if (window.innerWidth > 600) {
    headingHeight = 0;
    titles.forEach(function(e) {
      if (headingHeight < e.offsetHeight) {
        headingHeight = e.offsetHeight;
      }
    });
    titles.forEach(function(e) {
      e.parentElement.style.marginTop = 10 + headingHeight - e.offsetHeight + "px";
    });
  } else {
    titles.forEach(function(e) {
      e.parentElement.style.marginTop = "10px";
    });
  }
}

adjustHeadingHeights();
window.addEventListener("resize", function(event){
  adjustHeadingHeights();
});
