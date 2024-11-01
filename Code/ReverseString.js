function ReverseString(s) {
    let newstr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        newstr += s[i];
    }
    return newstr;
}

let s = 'Bangladesh is the Best country in the world';

console.log(ReverseString(s));
