const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}


function win(userChoice, computerChoice){
    resultDisplay.innerHTML = ("Player Wins");
    document.querySelector("#user-choice").textContent = (userChoice)
    document.querySelector("#computer-choice").textContent = (computerChoice) 
  
}

function lose(userChoice, computerChoice){
    resultDisplay.innerHTML = ("Computer wins");
    document.querySelector("#user-choice").textContent = (userChoice)
    document.querySelector("#computer-choice").textContent = (computerChoice)    
}

function tie(userChoice, computerChoice){
    resultDisplay.innerHTML = (userChoice + " equals " + computerChoice);
    document.querySelector("#user-choice").textContent = (userChoice)
    document.querySelector("#computer-choice").textContent = (computerChoice)
    
}


// - - - - - - - - - - - - - - 

function game(userChoice) {
  const computerChoice = getComputerChoice();

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




function main(){
    //rock.addEventListener("click", () => game("rock"))
     
     rock.addEventListener("click", function(){
         document.querySelector(".you-score").setAttribute("src", "images/rock.png")
        // document.querySelector(".computer-score").setAttribute("src", test)
        
         game("rock")
        
    }); 



   /*  paper.addEventListener("click", () => game("paper")) */
   paper.addEventListener("click", function(){
   document.querySelector(".you-score").setAttribute("src", "images/paper.png")
    
   
   game("paper")
    }); 



   /*  scissors.addEventListener("click", () => game("scissors"))  */
   scissors.addEventListener("click", function(){
   document.querySelector(".you-score").setAttribute("src", "images/scissors.png")
   
   
   game("scissors")
    }); 
}

main();