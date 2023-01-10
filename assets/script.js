//START BUTTON
// Declare Variables - order matters query selector, first class chosen and doesn't look beyond
const startEl = document.getElementById("start");
let countEl = document.getElementById("timeRemain");
let timeLeft = 60;
let question = document.querySelector(".main"); //better to use query selector instead of getElementbyClassName

// Event listener to initiate countdown when click Start button
startEl.addEventListener("click", function () {
  countdown();
  startEl.style.display = "none";
  quiz();
});

// TIMER
function countdown() {
  var timeInterval = setInterval(function () {
    countEl.textContent = timeLeft;
    // timeLeft--; //decrementally down from declared value
    timeLeft--;
    if (timeLeft > 1) {
      countEl.textContent = timeLeft;
    } else if (timeLeft === 1) {
      countEl.textContent = timeLeft;
      timeLeft--;
    } else {
      countEl.textContent = "";
      clearInterval(timeInterval);
      displayForm();
    }
  }, 1000);
}

console.log(timeLeft + " seconds starting amount of time");

function displayForm() {
  document.getElementById("ini").style.visibility = "visible";
}

// QUIZ QUESTIONS

//Setup array of objects //Objects are within {} //Keys (same) listed within multiple objects
let userArray = [
  {
    quest:
      "What characters are used to comment out lines of code in JavaScript?",
    options: ["||", "//", "/* */", "Ctrl+alt+delete"],
    ans: "//", //answer key
    //if options[i]=ans then DISPLAY yes else "wrong answer" and reduce timer
  },
  {
    quest: "Which is NOT an example of a combinator selector in CSS?",
    options: ["li a {}", "ul ~ p {}", "a[href=''] {}", "ul + p {}"],
    ans: "a[href=''] {}", //answer key
  },
  {
    quest:
      "Which is NOT an example of an event listener (ex. .addEventListener(  )?",
    options: ["click", "mouseout", "mousemove", "updelete"],
    ans: "updelete",
  },
  {
    quest: "Which of the following is incorrect?",
    options: [
      "DOM=Document Object Model",
      "URL=Universal Resource Location",
      "API=Application Programming Interface",
      "NaN=Not a number",
    ],
    ans: "URL=Universal Resource Location",
  },
  {
    quest: "How do you say the following character: % ? (Hint: not percent)",
    options: ["Modulus", "Truthy", "Division", "Octothorp"],
    ans: "Modulus",
  },
  {
    quest: "Which of the following is true?",
    options: ["camelCase", "snake_case", "PascalCase", "All of the above"],
    ans: "All of the above",
  },
]; //why can I not user square brackets here and not define a 'name' for each object???

const lengthQuiz = userArray.length;
console.log("The total number of questions is " + lengthQuiz);

let incVar = 0;
// var pNew = userArray[incVar]; //start question series here
// function renderQuestion(){
//   let pNew = userArray[incVar];
//   pNew.innerHTML;
// }

function quiz() {
  let score = document.createElement("h3");
  console.log("incVar " + incVar);
  let pNew = userArray[incVar];
  score = []; //set default score to 0
  // console.log("pNew " + JSON.stringify(pNew));
  // console.log("pNew " + pNew);
  // console.log("pNew.quest " + pNew.quest);
  // console.log("pNew.ans " + pNew.ans);
  // console.log("pNew.options " + pNew.options);
  question.innerHTML = ""; //Reset screen every time so questions don't stack up
  let check = document.createElement("h2");
  check.innerHTML = pNew.quest;
  question.appendChild(check)
  for (let ii = 0; ii < 4; ii++) {
    var q = document.createElement("button");
    q.innerHTML = pNew.options[ii];
    question.appendChild(q); //HTML DOM Document Element
    q.setAttribute("class", "buttonJS");
    // let updateButton = document.querySelectorAll(buttonJS);
    q.addEventListener("click", userSelect);
  }
  function userSelect(select) {
    let userAns = select.target.textContent;
    let ansAns = pNew.ans;
    if (userAns === ansAns && timeLeft > 0) {
      score ++;
      console.log(score);
      console.log(userAns);
      incVar++;
      quiz()
    } else if (userAns != ansAns && timeLeft > 0) {
      score--;
      timeLeft -= 5;
      console.log("score (wrong ans) " + score);
      incVar++;
      quiz()
    } else if (timeLeft === 0) {
    }
  }
}
var submitButton = document.getElementById("sub");
submitButton.addEventListener("click", scoreKeep);
function scoreKeep(event) {
  event.preventDefault();
  let initialIn = document.querySelector("input").value;
  localStorage.setItem("Initials", initialIn);
  console.log(initialIn);
  localStorage.setItem("Score", JSON.stringify(score)); //create string from array
  //display final score on submit button
  //localStorage.getItem to pull/ display local storage value
  //localStorage sandboxed to the browser, when deployed visible 
  let displayScore = document.createElement("display");
  displayScore.innerHTML = "Your final score is " + score;
  question.appendChild(displayScore);
}

// STORE INITIALS AND SCORE ON SUBMIT

//NOTES FROM TUTOR SESSION 1-6-2023 w/ Dennis I.
//Don't reference js as tags! Use the word element
// head and body are children (siblings) in the html
// ex. meta elements are children to head
// ex. div elements are children to body (parent)
//evenetlisteners on button -- MDN event.target !! dyanmically target
//console log element to see behavior of button (event.target)
//innerHTML of textContent ex. if driving=cars
//update children of div element class main

// NOTES FROM TUTOR SESSION 12-28-2022 w/ Bobbi T.
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

//Useful in local storage to turn inputs into strings instead of an array or object!!!
