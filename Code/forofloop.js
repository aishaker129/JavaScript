//for of loop
// let s = "My name is ai shaker";
// for(let i of s){
//     console.log(i,end=" "); 
// }

// let n = s.length;
// console.log(n);

// for in loop
const student = {
    name : "AI Shaker",
    age : 22,
    district : "Netrokona",
    country : "Bangladesh"
};

for(let key in student){
    console.log(key," = ",student[key]);
    
}
