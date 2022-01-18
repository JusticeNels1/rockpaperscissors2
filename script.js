//create function that controls the flow of the game
function playRound (userPlay,computerPlay){

    console.log(userPlay,computerPlay)
    if (userPlay == computerPlay){
        console.log("tie!")
    } else {
        return gameLogic(userPlay,computerPlay)
    }
    
}


let getPlays = () =>  {
    const plays = ["rock","paper","scissors"]  

    let computerPlay = (() => plays[Math.floor(Math.random() * 3)])()  //create random number to pick random play from array
    let userPlay = prompt("Please enter either rock paper or scissors"," ").toLowerCase()

    while(plays.indexOf(userPlay) == -1) {userPlay = prompt("Please enter a valid play"," ")}//check if player has input a valid answer
    
    return [userPlay,computerPlay]
}



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

function game () {
    let counter = 0;
    let cpuCounter = 0;
    for (let i = 0; i < 5; i++) {
        let arr = getPlays();
        let round = playRound(arr[0],arr[1])


        if (round) {
            console.log(`You Win ${arr[0]} beats ${arr[1]}!`);
            counter ++;
            console.log("counter: " + counter)
            console.log("cpu: " + cpuCounter)
        } else if (round != undefined){
            console.log(`You lose ${arr[1]} beats ${arr[0]}!`)
            cpuCounter ++
            console.log("counter: " + counter)
            console.log("cpu: " + cpuCounter)
        }else {i --}
    }

    if (counter - cpuCounter > 0|| false) {
        console.log("You Win")
        return
    }
    console.log("You Lose")
}

console.log(game())
