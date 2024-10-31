const prompt = require('prompt-sync')();
let a = parseFloat(prompt("Enter your weight: "));
let b = parseFloat(prompt("Enter your height: "));

function calculator(a,v){
    let ans = Math.round(a/(v*v));
    console.log(ans);
    
}
calculator(a,b);