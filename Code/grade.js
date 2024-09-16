/// get a number and find the grade to the particular number
const prompt = require('prompt-sync')();

let a =parseFloat( prompt("Enter a number: "));

if(a>=80){
    console.log("A+");  
}
else if(a >= 70 && a< 80){
    console.log("A");
}
else if(a >= 60 && a<70){
    console.log("A-");
}
else if(a >=50 && a< 60){
    console.log("B");
}
else if(a >= 40 && a< 50){
    console.log("C");
}
else if(a >=33 && a< 40){
    console.log("D");
}
else{
    console.log("F");
}