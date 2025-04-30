//Get the user choice what user select.
const choices = document.querySelectorAll(".choice");
//Msg that shows your result.
const msg = document.querySelector("#msg");

//User score text for showing result.
const userScorePara = document.querySelector("#player-score");
//Computer score text for showing result.
const compScorePara = document.querySelector("#comp-score");
//Result when the game wass draw.
const drawScorePara = document.querySelector("#draw");

//Reset game button
const resetbtn = document.querySelector("#reset");

// User Score.
let userScore = 0;
// Computer Score.
let compScore = 0;
//If Game was Draw
let drawScore = 0;

// Generate Computer choice.
const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

//Reset button listener.
resetbtn.addEventListener("click", () => {
  resetGame();
});

//Reset game logic.
const resetGame = () => {
  drawScore = 0;
  userScore = 0;
  compScore = 0;
  drawScorePara.innerText = drawScore;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  console.log("Game Reset");
  msg.innerText = "Game Reset. Ready to Play";
  msg.style.backgroundColor = "#3F4B3B";
};

//Game draw function.
const gameDraw = () => {
  drawScore++;
  console.log("Game was Draw. Play Again");
  drawScorePara.innerText = drawScore;
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "#3F4B3B";
};

//Game logic to get the result.
const gameLogic = (userChoice, compChoice) => {
  let userWin = true;
  if (userChoice === "rock") {
    // paper, scissors
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    // scissors, paper
    userWin = compChoice === "rock" ? false : true;
  } else {
    // paper, rock
    userWin = compChoice === "scissors" ? false : true;
  }

  showWinner(userWin);
};

//Refelect the result.
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("You Win!");
    userScorePara.innerText = userScore;
    msg.innerText = "Congratulations, You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    console.log("You Lose.");
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose. Play Again";
    msg.style.backgroundColor = "red";
  }
};

//Game Play function
const playGame = (userChoice) => {
  console.log("user choice was", userChoice);

  let compChoice = getCompChoice();

  console.log("computer choice was ", compChoice);

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    gameLogic(userChoice, compChoice);
  }
};

//Function that return User Choice.
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
