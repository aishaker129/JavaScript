const prompt = require('prompt-sync')();
let a =parseFloat( prompt("Enter a number: "));
for(let i=0; i<a; i++){
    let dot = "";
    if(i%2==0){
        dot +=" ";
        for(let j=0; j<4; j++){
            dot +='* ';
        }
        console.log(dot);
        
    }
    else{
        for(let j=0; j<4; j++){
            dot +='* ';
        }
        console.log(dot);
        
    }
}