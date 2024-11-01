const prompt = require('prompt-sync')();
let s = prompt("Enter a String: ");
let n = s.length;
let vowel = 0;
for (let i = 0; i < n; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') {
        vowel++;
    }
}
console.log(vowel);
