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
let tableArray = [];

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
        console.log(myArray);
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
        console.log(myArray);
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
        console.log(myArray);
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
        console.log(myArray);
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
        console.log(myArray);
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
        console.log(myArray);
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
        console.log(myArray);
      }

      /* i=1 j= */
      for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j].innerHTML = myArray[i * 3 + j];
        }
      }
      if (playerScore >= 6) {
        text.innerHTML = " You are a champion... ";
        text2.innerHTML = "You are a champion... ";
      } else if (computerScore >= 6) {
        text.innerHTML = " Computer beats You...";
        text2.innerHTML = " Computer beats You...";
      }
    });
  });
};

/* if (circleCollision(enemy, player)) {
      enemiesBalls.splice(i, 1);
      player.lives -= 1;

      if (player.lives <= 0) {
        alert("Game Over!");
        // startar om spelet när man klickar på ok
        window.location.reload();;
      }
      continue;
    }
  } */

game();
