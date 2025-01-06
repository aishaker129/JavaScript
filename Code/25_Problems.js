// const prompt = require('prompt-sync')();
// const name = prompt('What is your name? ');
// console.log(`Hello, ${name}!`);

// 1. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
const prompt = require('prompt-sync')();

function even_(number) {
    return number % 2===1;
}

const a = [];
let n = parseFloat(prompt());
for (let i = 0; i < n; i++){
    let b = parseFloat(prompt());
    a[i] = b;
}

let c = a.filter(even_);
console.log(c);
