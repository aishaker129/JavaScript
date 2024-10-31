// insert a value index 2 without delete any element
let a = [1,2,3,4,5];
let up = 10;
let i=2;
let n = a.length;
while(i<=n){
    let pre = a[i];
    a[i] = up;
    up = pre;
    i++;
    
}
for(let i=0; i<a.length; i++){
    console.log(a[i]);
}
