const prompt = require('prompt-sync')();

function fact(n){
    let b = 0;
    let c = 1;
    let fibo = 0;
    if(n==1){
        return b;
    }
    else if(n==2){
        return c;
    }
    else{
        fibo +=1;
        for(let i=3; i<=n; i++){
            fibo = b + c;
            b = c;
            c = fibo;
        }
        return fibo;
    }
}
let a =parseFloat( prompt());

let result = fact(a);
console.log(result);
