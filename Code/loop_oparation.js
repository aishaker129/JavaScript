const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter a number: "));
let sum = 0;
for(let i = 1; i<=a; i++){
    sum +=i;
}
console.log(sum);
let mul = 1;
for(let i = 1; i<=a; i++){
    mul *=i;
}
console.log(mul);
