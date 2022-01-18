//create function that controls the flow of the game
function playRound (){
    let computerPlay = null
    let userPlay = null

    getPlays
    return [userPlay,computerPlay]
}


let getPlays = (() =>  {
    const plays = ["rock","paper","scissors"]  
    computerPlay = (() => plays[Math.floor(Math.random() * 3)])()  //create random number to pick random play from array
    userPlay = prompt("Please enter either rock paper or scissors"," ")
    if (plays.indexOf(userPlay) == -1) {userPlay = prompt("Please enter a valid play"," ")}//check if player has input a valid answer
    
})()

// console.log(getPlays())
console.log(game())
//create block of logic to determine who's play is higher
function gameLogic (){

    switch (userPlay) {
        case "rock":
            if (computerPlay === "scissors") {console.log("you win")}
        break;
        case "scissors":
            if (computerPlay === "paper") {console.log("you win")}
        break;
        case "paper":
            if (computerPlay === "rock") {console.log("you win")}
        break;
        default: console.log("You Lose")
        break;
    }
}                // console.log(computerPlay)