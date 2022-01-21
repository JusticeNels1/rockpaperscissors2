(function setplayerName () {
    const playerName = document.getElementById('player-name')

    playerName.textContent = ((name) => name = prompt('Player Name!: ','player'))()

})()


function displayScores (playerScore,cpuScore) {
    let playerBoard = document.querySelector('.player.score')
    let cpuBoard = document.querySelector('.computer.score')

    playerBoard.innerText = playerScore;
    cpuBoard.innerText = cpuScore;
}


function playRound (userPlay,computerPlay){

    if (userPlay == computerPlay){
        console.log("tie!")
    } else {
        return gameLogic(userPlay,computerPlay)
    }

}

let getcpuPlay = () => {
    const plays = ["rock","paper","scissors"]

    return plays[Math.floor(Math.random() * 3)]
}  //create random number to pick random play from array



//create block of logic to determine who's play is higher
function gameLogic (userPlay,computerPlay){

    switch (userPlay) {
        case "rock":
            return (computerPlay === "scissors" ? true : false);
        break;
        case "scissors":
            return (computerPlay === "paper" ? true : false);
        break;
        case "paper":
            return (computerPlay === "rock" ? true : false);
        break;
        default: console.log("You Fuch");
        break;
    }
}

let counter = 0;
let cpuCounter = 0;

function updategameLog (round) { 
    
    displayScores(counter,cpuCounter)
    if (cpuCounter + counter == 5 || cpuCounter == 3 || counter == 3) { //checks if rounds total 5 
        counter = cpuCounter = 0
        return console.log("Game Done")
    }
    console.log("Play Again")
}

function displayGame (round,userPlay,cpuPlay) {
    
    if (round) {
        console.log(`You Win ${userPlay} beats ${cpuPlay}!`);
        counter ++;
        console.log("counter: " + counter)
        console.log("cpu: " + cpuCounter)
    } else if (round != undefined){
        console.log(`You lose ${cpuPlay} beats ${userPlay}!`)
        cpuCounter ++
        console.log("counter: " + counter)
        console.log("cpu: " + cpuCounter)
    }

    return [counter,cpuCounter]
}

//when the click event is fired you want to play a round,
//log those results, then you want to display the results
// of that round to the ui
let cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener('click',e => {

        let userChoice = e.target.innerText
        let cpuPlay = getcpuPlay()
        let roundRes = playRound(userChoice,cpuPlay)

        displayGame(roundRes,userChoice,cpuPlay)
        updategameLog()

        console.log("----------")
        // console.log(roundRes)
    })
})
// console.log(game())