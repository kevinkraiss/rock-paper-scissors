//pseudo-coding

//define variables
var choices = ["R", "P", "S"]
var wins = 0
var losses = 0
var ties = 0
var keepPlaying = true

while (keepPlaying) {
//player choice
var playerChoice = prompt("Enter R, P, or S")

 //select random value for computer
var randomIndex = Math.floor(Math.random() * choices.length)
var computerChoice = choices[randomIndex]
    

//log choices
console.log("player chose " + playerChoice)
console.log("computer chose " + computerChoice)

// compare choices
var result

if (playerChoice === computerChoice) {
    ties++
    result = "tied!"
} else if (
    playerChoice === 'r' && computerChoice === 's' ||
    playerChoice === 'r' && computerChoice === 's' ||
    playerChoice === 'r' && computerChoice === 's' 
 ) {
    wins++
    result = "won!"
 } else {
    losses++
    result = "lost..."
 }

// display (alert) results (won, tie, lost round)
alert("you " + result)

// show stats (number of wins, losses, ties)
alert(" wins = " + wins + "\n losses = " + losses + "\n ties = " + ties)

//ask to play again
var keepPlaying = confirm("play again?")

}
    // restart game
// else
    // end game
