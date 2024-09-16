// Take 2 number if first number is greater equal than add 3 number otherwise substruct two number
const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt());
let num2 = parseFloat(prompt());
// normal condition
// if(num1>=num2){
//     console.log(num1+num2);
// }
// else{
//     console.log(Math.abs(num1-num2));
// }

// using ternary operation

let ans = num1>=num2 ? num1+num2 : Math.abs(num1-num2);
console.log(ans);


