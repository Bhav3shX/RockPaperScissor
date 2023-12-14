const choices = document.querySelectorAll(".box");
const submitButton = document.getElementById("submit");
const resetButton=document.getElementById('reset');
const message=document.getElementById('winner');
const loaderContainer = document.querySelector(".loader-container");
const userValue=document.getElementById('user-score');
const compValue=document.getElementById('comp-score');
const userText=document.getElementById('user');
const compText=document.getElementById('comp');
let userChoice;
let compChoice;
let userScore=0;
let compScore=0;

resetButton.addEventListener('click',()=>{
userScore=0;
compScore=0;
userChoice='';
compChoice='';
message.innerText="";
userText.innerText=``;
compText.innerText=``;
userValue.innerText=0;
compValue.innerText=0;


})




choices.forEach((box) => {
  box.addEventListener("click", () => {
    if (box === choices[0]) {
      userChoice = "rock";
    }
    if (box === choices[1]) {
      userChoice = "paper";
    }
    if (box === choices[2]) {
      userChoice = "scissor";
    }
  });
});

const values = ["rock", "paper", "scissor"];
let index;

submitButton.addEventListener("click", () => {
    message.innerText="";
    userText.innerText='';
    compText.innerText=``;
  loaderContainer.classList.add('show'); // Show loader
  setTimeout(() => {
    let index = Math.floor(Math.random() * 3);
    compChoice = values[index];
    loaderContainer.classList.remove('show'); // Hide loader after 3 seconds
    checkWinner(userChoice,compChoice);
    userChoice=undefined;
   compChoice=undefined;
  }, 5000); // Delay the execution of this block for 3 seconds
  
});

let checkWinner= (userChoice,compChoice)=>{
    if(userChoice===undefined){
        message.innerText="Please Select One Choice";
    }
 else if (userChoice === compChoice) {
    // It's a tie
    message.innerText="Its Draw";
    userText.innerText=`You Choose ${userChoice}`;
    compText.innerText=`Comp Choose ${compChoice}`;
   
  } else if (
    (userChoice === 'rock' && compChoice === 'scissor') ||
    (userChoice === 'scissor' && compChoice === 'paper') ||
    (userChoice === 'paper' && compChoice === 'rock')
  ) {
    // User wins
    message.innerText="You Won";
    userScore++;
    userValue.innerText=userScore;
    userText.innerText=`You Choose ${userChoice}`;
    compText.innerText=`Comp Choose ${compChoice}`;
   

  } else {
    // Computer wins
    message.innerText="Computer Won";
    compScore++;
    compValue.innerText=compScore;
    userText.innerText=`You Choose ${userChoice}`;
    compText.innerText=`Comp Choose ${compChoice}`;
   
  }
  
}

