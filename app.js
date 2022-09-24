const computerChoiceDisplay = document.getElementById("computer");
const userChoiceDisplay = document.getElementById("you");
const resultDisplay = document.getElementById("result");
const btn = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

btn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  let guess = Math.floor(Math.random() * 3);
  if (guess === 0) {
    computerChoice = "Rock";
  }
  if (guess === 1) {
    computerChoice = "Paper";
  }
  if (guess === 2) {
    computerChoice = "Scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice == userChoice) {
    result = " It's a Tie 🦹=🤖 Try Again 😟";
  } else if (
    (computerChoice == "Rock" && userChoice == "Paper") ||
    (computerChoice == "Paper" && userChoice == "Scissor") ||
    (computerChoice === "Scissor" && userChoice == "Rock")
  ) {
    result = `YOU 🦹 Won 😃 BOT 🤖 Lost 😢`;
  } else {
    result = `BOT 🤖 Won 😃 YOU🦹 Lost 😢  `;
  }
  resultDisplay.innerHTML = result;
}
