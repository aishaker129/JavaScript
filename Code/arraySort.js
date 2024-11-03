let arr = [1,5,3,4,2];
for(let i=0; i<arr.length; i++){
    let low = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[low]){
            low = j;
        }
    }

    if(arr[i] !=arr[low]){
        let t = arr[i];
        arr[i] = arr[low];
        arr[low] = t; 
    }
}

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]+end=' ');
// }
console.log(arr);
