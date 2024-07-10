let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        //Generate user choice
        let userChoice = choice.getAttribute("id");
        //console.log("you selected", userChoice);
        playGame(userChoice);
    })
});

let playGame = (userChoice) => {
    //console.log("you selected =", userChoice);

    //Generate computer choice
    let compChoice = genCompChoice();
    //console.log("computer selected =", compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //comp. will choose (Paper or Scissor)
         userWin =  compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //copm. will choose (Scissor or Rock)
            userWin = compChoice === "Scissor" ? false : true; 
        } else {
            //use will choose Scissor and comp. will choose (Rock or Paper)
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

let genCompChoice = () => {
    let option = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
};

//for draw game msg
 let drawGame = () => {
    //console.log ("Game was draw!!");
    msg.innerHTML = "Game was draw. Play again";
    msg.style.backgroundColor = "black"
};

//for winner game msg
let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        //console.log("You win");
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You win!! <span>&#128512;</span> Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        //console.log("You loose");
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You loose.. <span>&#128517;</span> ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


