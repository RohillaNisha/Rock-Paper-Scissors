let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const showIcon = document.querySelector(".showYou i");
const computerShowIcon = document.querySelector(".showComputer i");
const buttons = document.querySelectorAll(".selection button");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  playerScore++;
  resultDisplay.innerHTML = "You win!";
  document.querySelector("#playerScore").innerHTML = playerScore;
  document.querySelector("#computerScore").innerHTML = computerScore;
  playerScoreCount();
}

function lose() {
  computerScore++;
  resultDisplay.innerHTML = "You loose!";
  document.querySelector("#playerScore").innerHTML = playerScore;
  document.querySelector("#computerScore").innerHTML = computerScore;
  playerScoreCount();
}

function tie(userChoice, computerChoice) {
  resultDisplay.innerHTML = "Draw!!";
  document.querySelector("#playerScore").innerHTML = playerScore;
  document.querySelector("#computerScore").innerHTML = computerScore;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (computerChoice === "rock") {
    computerShowIcon.className = "fas fa-hand-rock";
  } else if (computerChoice === "paper") {
    computerShowIcon.className = "fas fa-hand-paper";
  } else {
    computerShowIcon.className = "fas fa-hand-scissors";
  }

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }
  console.log(userChoice + computerChoice);
}

function main() {
 

/*   let numbeOfButtons = document.querySelectorAll(".button").length;

  for (let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
     let clickedBtn = event.target.className;
      showIcon.className = clickedBtn;
      game(event.target.id);
  }

   */
 

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let clickedBtn = event.target.className;
      showIcon.className = clickedBtn;
      game(event.target.id);
    });
  });
}


main();

function restartGame() {
  window.location.reload();
}

function playerScoreCount() {
  if (playerScore >= 3) {
    resultDisplay.innerHTML = "You are a champion!";
    let audiowin = new Audio("applause.wav");
    audiowin.play();
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  } else if (computerScore >= 3) {
    resultDisplay.innerHTML = "Computer beats you!";
    let audiolose = new Audio("lose.wav");
    audiolose.play();
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

// hover effects on icons at homepage
let rk = document.getElementById("rock");
let ppr = document.getElementById("paper");
let sc = document.getElementById("scissors");
let rknm = document.getElementById("rockname");
let pprnm = document.getElementById("papername");
let scnm = document.getElementById("scissorsname");

let iconrk = document.getElementById("rock");
let iconppr = document.getElementById("paper");
let iconscr = document.getElementById("scissors");

iconrk.addEventListener("mouseover", handleEvent);
iconppr.addEventListener("mouseover", handleEvent);
iconscr.addEventListener("mouseover", handleEvent);

function handleEvent(event) {
  if (event.target.id == "rock") {
    rknm.style.visibility = "visible";
    rknm.style.color = "#00f3ff";
    rknm.style.textShadow = "0 0 15px #00f3ff";
  } else if (event.target.id == "paper") {
    pprnm.style.visibility = "visible";
    pprnm.style.color = "greenyellow";
    pprnm.style.textShadow = "0 0 15px greenyellow";
  } else if (event.target.id == "scissors") {
    scnm.style.visibility = "visible";
    scnm.style.color = "red";
    scnm.style.textShadow = "0 0 15px red";
  }
}
