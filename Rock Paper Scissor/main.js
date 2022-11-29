let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const buttons = document.querySelectorAll(".selection button");
const showIcon = document.querySelector(".showYou i");
const computerShowIcon = document.querySelector(".showComputer i");
const table = document.getElementById("data-table");
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const text = document.getElementById("text");
const text2 = document.getElementById("text2");

let winner;
let myArray = [];

// Game Functionality: Setting forEach function for the buttons.
const game = () => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Random rock paper scissor for the computer and the player
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;
      myArray.push(e.target.id);

      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];
      if (computerShowIcon.className == "fas fa-hand-rock") {
        myArray.push("Rock");
      } else if (computerShowIcon.className == "fas fa-hand-paper") {
        myArray.push("Paper");
      } else {
        myArray.push("Scissors");
      }

      if (showIcon.className === computerShowIcon.className) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "It's a Tie ! ";
        text2.innerHTML = text.innerHTML;
        myArray.push("Tie");
      } else if (
        showIcon.className === randomClasses[0] &&
        computerShowIcon.className === randomClasses[2]
      ) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = "rgb(1, 146, 1)";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "rgb(1, 146, 1)";
        myArray.push("Player");
      } else if (
        showIcon.className === randomClasses[0] &&
        computerShowIcon.className === randomClasses[1]
      ) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Loosed ! ";
        text.style.color = "red";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "red";
        myArray.push("Computer");
      } else if (
        showIcon.className === randomClasses[1] &&
        computerShowIcon.className === randomClasses[2]
      ) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Loosed ! ";
        text.style.color = "red";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "red";
        myArray.push("Computer");
      } else if (
        showIcon.className === randomClasses[1] &&
        computerShowIcon.className === randomClasses[0]
      ) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = "rgb(1, 146, 1)";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "rgb(1, 146, 1)";
        myArray.push("Player");
      } else if (
        showIcon.className === randomClasses[2] &&
        computerShowIcon.className === randomClasses[0]
      ) {
        cScore.innerHTML = computerScore;
        computerScore++;
        text.innerHTML = "You Loosed ! ";
        text.style.color = "red";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "red";
        myArray.push("Computer");
      } else if (
        showIcon.className === randomClasses[2] &&
        computerShowIcon.className === randomClasses[1]
      ) {
        pScore.innerHTML = playerScore;
        playerScore++;
        text.innerHTML = "It's a Win ! ";
        text.style.color = "rgb(1, 146, 1)";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "rgb(1, 146, 1)";
        myArray.push("Player");
      }

      /* i=1 j= */
      for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j].innerHTML = myArray[i * 3 + j];
          if (myArray[i * 3 + j] == null || myArray[i * 3 + j] == undefined) {
            table.rows[i].cells[j].innerHTML = ".....";
          }
        }
      }
      if (playerScore === 6) {
        text.innerHTML = " You are a champion... ";
        text2.innerHTML = "You are a champion... ";
        if (playerScore >= 6) {
          document.getElementById("Rock").disabled = true;
          document.getElementById("Paper").disabled = true;
          document.getElementById("Scissors").disabled = true;
        }
      } else if (computerScore === 6) {
        text.innerHTML = " Computer beats You...";
        text2.innerHTML = " Computer beats You...";
        if (computerScore >= 6) {
          document.getElementById("Rock").disabled = true;
          document.getElementById("Paper").disabled = true;
          document.getElementById("Scissors").disabled = true;
        }
      }
    });
  });
};

function restartGame() {
  window.location.reload();
}

game();
