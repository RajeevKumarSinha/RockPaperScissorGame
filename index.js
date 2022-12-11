const rpsButtons = document.querySelectorAll(".rps")
// rpsButtons is the Array of ["rock","paper","scissor"] buttons 
const stopBtn = document.querySelector(".stopBtn");
// stopBtn: stores acess to stop btn
const winnerSpan = document.querySelector(".showWinnerSpan");
const gameData = {
    rock: "Rock",
    paper: "Paper",
    scissor: 'Scissor',
    randomNo: () => Math.floor(Math.random() * 3),
    points: 0,
    result: "",
    currentValue: 0
}
rpsButtons.forEach(rpsbtn => {
    // for each loop applied on rpsButtons array 
    rpsbtn.onclick = () => {
        // rpsbtn is the array single element of rpsButtons array. 
        let randomRps = Object.values(gameData)[gameData.randomNo()];
        //    randomRps fetch the random item from gameData Object from 0 to 2 index "rock","paper" or "scissor"
        let userRps = rpsbtn.value;
        //    userRps just gives the value of the pressed btn from the rps 
        if (randomRps == userRps) {
            gameData.result = "It's a Draw!";
            gameData.currentValue = 0;
        } else {
            if (randomRps == "Rock" && userRps == "Paper") {
                gameData.result = "You Win!";
                gameData.currentValue = 1;
            } else if(randomRps == "Paper" && userRps == "Scissor"){
                gameData.result = "You Win!";
                gameData.currentValue = 1;   
            }else if(randomRps == 'Scissor' && userRps == "Rock"){
                gameData.result = "You Win!";
                gameData.currentValue = 1; 
            }else{
                gameData.result = "You Lose!"
                gameData.currentValue = -1;
            }
        }
        gameData.points +=gameData.currentValue;

        winnerSpan.innerText = `${gameData.points} \n👱 ${userRps} vs 🤖 ${randomRps} \n${gameData.result}`
        // console.log(randomRps, userRps);

        // console.log(gameData.result, gameData.points)
    }
});

stopBtn.onclick =() =>{
    winnerSpan.innerText ="...";
    gameData.result = "";
    gameData.points = 0;
    gameData.currentValue =0;
}
// stopBtn.onclick event resets the values and result and also updates the DOM
// to default 





// lingusistic:
//  what should happen on click of the rcp btns ?
//  1. It should calculate if you are the winner or the computer is the
// winner.
// 2. it should update the win or lose and count of the points on the screen
// Output:
// 👱 Rock vs 🤖 Scissors You Win!
// 👱 Paper vs 🤖 PaperIt's a Draw!
// 👱 Scissors vs 🤖 Rock You Lose!

