const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const pChoice = document.getElementById("pChoice");
const cChoice = document.getElementById("cChoice");
const playuerScore = document.getElementById("pScore");
const computerScore = document.getElementById("cScore");
let cScore = 0;
let pScore = 0;

choices.forEach((element) => {
  element.addEventListener("click", () => {
    const computerC = computerChoice();
    const playerC = element.id;
    const playResult = play(computerC, playerC);
    if (playResult == "WIN") {
      result.style.color = "rgb(16, 191, 22)";
    } else if (playResult == "LOSE") {
      result.style.color = "tomato";
    } else {
      result.style.color = "black";
    }
    result.textContent = `YOU ${playResult}!`;
    pChoice.textContent = `Player Choice : ${playerC}`;
    cChoice.textContent = `Computer Choice : ${computerC}`;
    playuerScore.textContent = `Player Score : ${pScore}`;
    computerScore.textContent = `Computer Score : ${cScore}`;
  });
});

function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
function play(computerChoice, playerChoice) {
  result.style.display = "block";
  if (computerChoice == playerChoice) {
    return "DRAW";
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    pScore++;
    return "WIN";
  } else if (computerChoice == "paper" && playerChoice == "scissor") {
    pScore++;
    return "WIN";
  } else if (computerChoice == "scissor" && playerChoice == "rock") {
    pScore++;
    return "WIN";
  } else {
    cScore++;
    return "LOSE";
  }
}
function reset() {
  cScore = 0;
  pScore = 0;
  pChoice.textContent = `Player Choice : `;
  cChoice.textContent = `Computer Choice : `;
  playuerScore.textContent = `Player Score : ${pScore}`;
  computerScore.textContent = `Computer Score : ${cScore}`;
  result.style.display = "none";
}
