// // // let marks=[32,34,56,98,78,90]
// // // console.log(marks);
// // // console.log(marks.length)
// // // console.log(marks[2])
// // // console.log(marks[6])

// // let heroes=["ironman","spiderman","antman","hulk"]
// // for(let i=0;i< heroes.length;i++){
// //     console.log(heroes[i])

// // }
// // for(let i of heroes){
// //     console.log(i)
// // }

// for(let i of heroes){
//     console.log(i.toUpperCase())
// }

let numbers=[89,76,45,90,38,93];
let sum=0;
for(let val of numbers){
    sum += val;
}
let avg=sum/numbers.length;
console.log(`avg marks of the class=${avg}`);