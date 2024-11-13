// const arr = ["AI","Shaker","Mahfuz","Rifat","Ali"];
// // for(let x in arr){
// //     console.log(arr[x]);
    
// // }
// // console.log(arr.toString());
// // console.log(arr);

// // const a = [];
// // a[0] = arr;
// // console.log(a);
// // arr.sort();
// // console.log(arr);
// // arr.push("Rafiul");
// // arr[9] = 'Daiyan';
// // arr.forEach(myfunction);
// // function myfunction(value){
// //     console.log(value);
    
// // }
// const  b = arr;
// console.log(b);

// const array = new Array(10,30,20,10,5,100);
// const arr = [10,30,20,10,5,100];
// console.log(array[0]);
// console.log(typeof array);
// console.log(typeof arr);
// console.log(Array.isArray(array));
// console.log(arr.unshift());

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }

//   console.log(myObj);
  
//   for( let i in myObj.cars){
//     // console.log(myObj.cars.name+" ");
//     for(let j in myObj.cars[i].models){
//         console.log(myObj.cars[i].models[j]+' ');
        
//     }
//     console.log();
    
//   }
//   console.log(arr.copyWithin(3,2));
  
const arr = [[1,2],[3,4],[5,6]];
const newarr = arr.flat();
console.log(newarr);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);

