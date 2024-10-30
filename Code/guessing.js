/// Create a game where you start with any random game number.Ask the user to keep guessing the 
/// game number untill user enter the correct value
const prompt = require('prompt-sync')();

let number = parseFloat(prompt("Enter your number: "));
let gameNumber = 7;

while (number != gameNumber) {
    number = parseFloat(prompt(" Oops Try again: "));
}
console.log("You won the game");
