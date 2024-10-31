const prompt = require('prompt-sync')();
let a = parseFloat(prompt("Enter run: "));
let b = parseFloat(prompt("Enter ball: "));
function calculator(n,m){
    let st = Math.round((n*100)/m);
    console.log(st);
}
calculator(a,b);
console.log(typeof b);
if(typeof b == number){
    console.log("Yes");
    
}