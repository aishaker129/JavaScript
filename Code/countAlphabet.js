const prompt = require('prompt-sync')();

function cntAlphabet(s){
    
    let a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i=0; i<s.length; i++){
        let b = s[i].charCodeAt(0)-'0'.charCodeAt(0);
        b-=49;
        let n = a[b];
        a[b] = n+1; 
    }
    for(let i=0; i<a.length; i++){
        if(a[i] !=0){
           let n = 97+i;
           let ch = String.fromCharCode(n);
           console.log(ch+" = "+a[i]);
           
           
        }
    }
    
    
    
}

let str = prompt('Enter your text: ');
str = str.toLocaleLowerCase();
cntAlphabet(str);







