let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

main();

function main() {
  rock_div.addEventListener("click", () => game("rock"));

  paper_div.addEventListener("click", () => game("paper"));

  scissors_div.addEventListener("click", () => game("scissors"));
}

function game(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, cpuChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, cpuChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, cpuChoice);
      break;
  }
}

function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, cpuChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = userChoice + " beats " + cpuChoice + ". You win!";
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(userChoice, cpuChoice) {
  const userChoice_div = document.getElementById(userChoice);
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = cpuChoice + " beats " + userChoice + ". You Lose!";

  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, cpuChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = userChoice + " equals " + cpuChoice + ". It's a draw!";

  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000);
}
