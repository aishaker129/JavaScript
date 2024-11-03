let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str.charAt(5)); // specific index value return
console.log(str.charCodeAt(5)); // specific index value code return
console.log(str.at(5));
console.log(str.at(-5));
console.log(str.charAt(-5));

str[0] = "M"; // no error but original string does not change
console.log(str);
console.log(str.slice(0,20)); // start to end-1 index string return
console.log(str.substring(5,20)); // Same as slice methods

console.log(str.toLocaleLowerCase()); // conver all string to lowercase
console.log(str.concat(" ","My name is Ai Shaker")); // add to string

let s = "   my name is ai shaker   ";
console.log(s.trim()); // remove all white space
console.log(s.trimStart()); // remove all starting white space 
console.log(s.trimEnd()); // remove all ending white space

let a = '5';
console.log(a.padStart(4,'x'));// add xxx5
console.log(a.padEnd(4,'x'));// add 5xxx

console.log(a.repeat(5)); // repete string with specific time

let ab = "my life my rules";
console.log(ab.replaceAll("my","our"));
console.log(ab.split(','));

