// order matters query selector, first class chosen and doesn't look beyond 
const startEl = document.getElementById("start")
let countEl = document.getElementById('timeRemain');
var timeLeft = 5;

// Event listener to initiate countdown when click Start button
startEl.addEventListener("click", function(){
  countdown();
  startEl.style.display = 'none';
});

// TIMER
function countdown() {
  var timeInterval = setInterval(function () {
    countEl.textContent = timeLeft;
    // timeLeft--; //decrementally down from declared value
    timeLeft--;
    if (timeLeft > 1) {
      countEl.textContent = timeLeft;
    } 
    else if (timeLeft === 1){
      countEl.textContent = timeLeft;
      timeLeft--;
    }
    else  {
      countEl.textContent = '';
      clearInterval(timeInterval);
      displayForm();
    } 
  }, 
  1000);
}

console.log(timeLeft + ' seconds starting amount of time');

function displayForm(){
  document.getElementById("ini").style.visibility = "visible";
}

// QUIZ QUESTIONS

var question = document.querySelector("#q");
var ans1 = document.querySelector("#one");
var ans2 = document.querySelector("#two");
var ans3 = document.querySelector("#three");
var ans4 = document.querySelector("#four");

question.textContent = "What format do you use to comment out lines of code in CSS?"
ans1.textContent= "a. /* */";
ans2.textContent= "b. <--! !-->";
ans3.textContent= "c. //";
ans4.textContent= "d. ! || !";

function quiz(){

}


// STORE INITIALS AND SCORE ON SUBMIT

var submitButton = document.getElementById("sub")

submitButton.addEventListener("click", function(){
  var enter = document.getElementsbyId("#ini").value;
  // if (enter === "") {
  //   dispalyMessage("error", "initials cannot be blank")
  // }
  // else {
  //   displayMessage("sucess");
  // }
  localStorage.setItem("initials", enter);
});



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


// NOTES FROM TUTOR SESSION 12-28-2022
// append button in html 
// on refresh of web page, anything appended will reset to original html
// method of .innerHTML()
// += js a way of adding new stuff
// = "" will empty an area 

//setInterval and clearInterval are web APIs!
// Local storage for initials/ score

// shift + alt + down arrow to copy lines of code
// after pressing submit, reset back to 0 
//     known completion of the quiz at this step

// Global variable so multiple functions can access ex. subtract time if wrong answer
// var vs. let for scoping (let ES6 syntax)
// view highscores can be a button that then hides the main div then shows previous 
// display none for css within a class
// different than hidden or visible since the framework still there but not seen to the user
