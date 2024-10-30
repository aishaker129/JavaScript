const date = new Date("2024-10-31");

let year = 1990;
for(let i=year; i<=date.getFullYear(); i++){
    if(i % 400 ==0 || i % 4 ==0 && i % 100!=0){
        console.log(i);
    }
}