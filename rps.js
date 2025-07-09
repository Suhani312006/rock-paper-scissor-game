let userscore = 0;
let compscore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");


startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
});

  resetBtn.addEventListener("click", () => {
  userscore = 0;
  compscore = 0;
  userscorePara.innerText = "0";
  compscorepara.innerText = "0";
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#966e6a";

});




const genCompChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const drawgame = () => {
    msg.innerText = "Game was draw, Play again" ;
    msg.style.backgroundColor = "#966e6a"
};

const showwinner = (userwin, userChoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        
    }

};

const playgame = (userChoice) => {
    const compchoice = genCompChoice();

    if(userChoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compchoice === "paper" ? false : true;

        }
        else if(userChoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin, userChoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});