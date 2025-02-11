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

document.getElementById('convertButton').addEventListener('click', convertCurrency);

function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const result = document.getElementById('result');

  if (amount === "" || isNaN(amount)) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/60ccc70b1e0b7a42c1baefcc/latest/${fromCurrency}`;

  // Fetch the conversion rates in JSON format
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
  
      const rate = data.rates[toCurrency];
      if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      } else {
        result.textContent = "Conversion rate not available.";
      }
    })
    .catch(error => {
      result.textContent = "Error fetching conversion rate.";
      console.error("Error:", error);
    });
}



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