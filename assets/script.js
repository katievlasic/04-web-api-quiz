


// Event listener on click of Start Button
// chosing const since this variable will never be re-assigned another value
// practice using const for all query selectors
// order matters query selector, first class chosen and doesn't look beyond 
const startEl = document.querySelector(".start")

startEl.addEventListener('click', function(){
    cardEl.setAttribute()
});

// TIMER
var timerEl = document.querySelector('.countdown');

// Global variable so multiple functions can access ex. subtract time if wrong answer
// var vs. let for scoping (let ES6 syntax)
var timeLeft = 30;

function countdown() {

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


// Local storage for initials/ score

// textContent()


// Object array 
let questions = [
  // index 0 of array questions
  {
    question: "first question",
    choice: ["one","two"],
    answer: "one"
  },
  {
    question: "second question",
    choice: ["2","3"],
    answer: "2"
  },
]

// shift + alt + down arrow to copy

// function that displays questions ^ 
let userans
for 

// append button in html 
// on refresh of web page, anything appended will reset to original html
// method of .innerHTML()
// += js a way of adding new stuff
// = "" will empty an area 

// after pressing submit, reset back to 0 
//     known completion of the quiz at this step

// view highscores can be a button that then hides the main div then shows previous 
// display none for css within a class
// different than hidden or visible since the framework still there but not seen to the user
