/// Get a user input to check the number is multiple by 5 or not...?

const prompt = require('prompt-sync')();

let a =prompt("Enter a number: ");

let res = a % 5 === 0 ? "Multiple by 5 ":"Not multiple by 5";
console.log(res);
