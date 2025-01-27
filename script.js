//Dark mode

const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;
const currentMode = localStorage.getItem('theme');
if (currentMode === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Switch to Light Mode';
}


toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    // Update the button text
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
        
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

//Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
    } else {
        panel.classList.add('show');
    }
  });
}


//abilities

//Currency

// Location
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}