const prompt = require('prompt-sync')();
function fact(n) {
    let num = 1;
    let num1 = 2;
    let result = 1;
    if (n == 1) return num;
    else if (n == 2) return num1;
    else {
        for (let i = 3; i <= n; i++) {
            result =num1*i;
            num = num1;
            num1 = result;
        }
        return result;
    }
}

let a = parseFloat(prompt());
let ans = fact(a);
console.log(ans);
