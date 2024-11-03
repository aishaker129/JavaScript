function Men(first,last,age,status,nationality){
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.status = status;
    this.nationality = nationality;
    this.fullName = function(){
        return this.fname + " "+this.lname;
    };
}

const obj = new Men("Ai","Shaker",22,"Student","Bangladeshi");
const obj1 = new Men("Ak","Mahmud",19,"Student","Bangladeshi");
console.log(obj);
Men.prototype.aim = "Footballer";
Men.prototype.changeName = function(name){
    return this.lname = name;
}
obj1.changeName("Aker")
for(let x in obj1){
    console.log( x + ' = '+obj1[x]);
    
}
