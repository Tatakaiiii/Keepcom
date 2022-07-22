let slideIndex = 1;  //==> means first pic
showSlides(slideIndex); //display the first image

// Next/previouswhe the users click on button plusslides() substract or add 1 to slideindex
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (dot)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // if slideIndex higher than slides.length slideIndex is set to 1
  if (n < 1) {slideIndex = slides.length} // if slideIndex is less than 1 it is set to the number of elements
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hides all the elements with the class name myslides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // displays the element with the given slideIndex
  dots[slideIndex-1].className += " active";
}
let mySlides = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hides all the elements with the class name myslides
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"; // displays the elemt with the given slideIndex
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}