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

document.getElementById('convertButton').addEventListener('click', convertCurrency);

function convertCurrency() {
  const amountInput = document.getElementById('amount').value;
  const amount = parseFloat(amountInput);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const result = document.getElementById('result');

  // Validate the amount input
  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  // API endpoint using USD as the base currency
  const url = `https://v6.exchangerate-api.com/v6/a087b8b72226c312f4d99b69/latest/USD`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Note: The API returns "conversion_rates", not "rates"
      const rates = data.conversion_rates;
      const rateFrom = rates[fromCurrency];
      const rateTo = rates[toCurrency];

      if (rateFrom && rateTo) {
        // Convert the entered amount from the selected currency to USD,
        // then convert from USD to the target currency.
        const amountInUSD = amount / rateFrom;
        const convertedAmount = (amountInUSD * rateTo).toFixed(2);
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