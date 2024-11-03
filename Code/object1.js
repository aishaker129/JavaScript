const men = {
    'fname' : 'Ai',
    'lname' : 'Shaker',
    'age' : 22,
    'fullName' : function(){
        return (this.fname+' '+this.lname).toUpperCase();
    }
};
// let b = 'fname';
// let c = 'lname';
// //delete men.age;
// console.log(men[b] + ' ' + men[c]);
// console.log(men);
// console.log(men.fullName());
// let txt = '';
// for (let x in men){
//     console.log(men[x]);
// }
// Using Object.values()
// const  myarray = Object.values(men);
// for(let c in myarray){
//     console.log(myarray[c]);
    
// }
// Using Object.entries()
// for(let [x,y] of Object.entries(men)){
//     console.log(x+' = '+y);
    
// }

// Using JSON.stringify()

let str = JSON.stringify(men);
console.log(str);





