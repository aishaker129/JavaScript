const prompt = require('prompt-sync')();

// function Person(name,age,city){
//     return{
//         name : name,
//         age : age,
//         city : city
//     };
// }
// we can write this way because the parameter and variable are same
function Person(name,age,city){
    return{
        name,
        age,
        city,
    };
}

let a = [];
let i = 0;
while(i!=5){
    let name = prompt("");
    let age = prompt("");
    let city = prompt("");
    let person = new Person(name,age,city);
    a[i] = person;
    i++;
}

console.log(a);


