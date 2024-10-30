// print a triangle shape using *
const prompt = require('prompt-sync')();

let a =parseFloat( prompt("Enter a number: "));
for(let i=1; i<=a; i++){
    let dot = "";
    for(let j=1; j<=i; j++){
       dot +="*"; 
    }
    console.log(dot);
}