let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const restart = document.querySelector(".restart");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

    restart.addEventListener("click", () =>{
        userScore = 0;
        compScore = 0;
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        msg.innerText = "Game Restarted";
    })


const compChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const drwaGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroudColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroudColor = "red";
    }
}

const playGame = (user) =>{
    const comp = compChoice();

    if(comp==user){
        drwaGame();
    }
    else{
        let userWin = true;
        if(user == "rock"){
            userWin = comp === "scissor" ? true:false;
        }else if(user == "paper"){
            userWin = comp === "rock" ? true:false;
        }else{
            userWin = comp === "paper" ? true:false;
        }
        showWinner(userWin,user,comp);
    } 
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});


