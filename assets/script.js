


// Event listener on click of Start Button
var startEl = document.querySelector(".start")

startEl.addEventListener('click', function(){
    cardEl.setAttribute()
});

// TIMER
var timerEl = document.querySelector('.countdown');

function countdown() {
    var timeLeft = 30;

//setInterval and clearInterval are web APIs!
var timeInterval = setInterval(function () {
    timeLeft--; //decrementally down from declared value
    timerEl.textContent = timeLeft + "seconds left til"
    if (timeLeft === 0){
      clearInterval(timeInterval);
} 
  }, 
  1000);
}

// reset timer
timerEl.setTime();