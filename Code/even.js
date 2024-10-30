/// given a number to find the even number from 1 to number 

const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Enter a number: "));

for(let i = 1; i<=n; i++){
    if(i%2==0){
        console.log(i);
    } 
}