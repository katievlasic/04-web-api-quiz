// order matters query selector, first class chosen and doesn't look beyond 
const startEl = document.getElementById("start")
let countEl = document.getElementById('timeRemain');
var timeLeft = 30;


// Event listener to initiate countdown when click Start button

startEl.addEventListener("click", function(){
  countEl.textContent = timeLeft;
  timeLeft--;
});

// TIMER

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--; //decrementally down from declared value
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    } 
  }, 
  1000);
}

countdown();
console.log(countEl);


//setInterval and clearInterval are web APIs!
// Local storage for initials/ score

// Global variable so multiple functions can access ex. subtract time if wrong answer
// var vs. let for scoping (let ES6 syntax)

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

// function that displays questions ^ 
// let userans
// for 

// append button in html 
// on refresh of web page, anything appended will reset to original html
// method of .innerHTML()
// += js a way of adding new stuff
// = "" will empty an area 


// shift + alt + down arrow to copy lines of code
// after pressing submit, reset back to 0 
//     known completion of the quiz at this step

// view highscores can be a button that then hides the main div then shows previous 
// display none for css within a class
// different than hidden or visible since the framework still there but not seen to the user
