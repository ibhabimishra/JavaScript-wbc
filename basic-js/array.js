// // // // // // // // // let marks=[32,34,56,98,78,90]
// // // // // // // // // console.log(marks);
// // // // // // // // // console.log(marks.length)
// // // // // // // // // console.log(marks[2])
// // // // // // // // // console.log(marks[6])

// // // // // // // // let heroes=["ironman","spiderman","antman","hulk"]
// // // // // // // // for(let i=0;i< heroes.length;i++){
// // // // // // // //     console.log(heroes[i])

// // // // // // // // }
// // // // // // // // for(let i of heroes){
// // // // // // // //     console.log(i)
// // // // // // // // }

// // // // // // // for(let i of heroes){
// // // // // // //     console.log(i.toUpperCase())
// // // // // // // }

// // // // // //1.  let numbers=[89,76,45,90,38,93];
// // // // // // let sum=0;
// // // // // // for(let val of numbers){
// // // // // //     sum += val;
// // // // // // }
// // // // // // let avg=sum/numbers.length;
// // // // // // console.log(`avg marks of the class=${avg}`);

// // // // // let items=[768,987,456,765,345]
// // // // // let i=0;
// // // // // for(let val of items){
// // // // //     console.log(`value of index ${i}=${val}`);//initial value
// // // // //     let offer=val/10;
// // // // //     items[i]=items[i]-offer;
// // // // //     console.log(`value after offer=${items[i]}`)//discounted value
// // // // //     i++;
// // // // // }

// // //  let foodItem=["burger","pizza","momos","panipuri"]
// // // // console.log(foodItem)
// // // // foodItem.push("dahibara","masala dosa")
// // // // console.log(foodItem)
// // // // foodItem.pop()
// // // // foodItem.pop()
// // // console.log(foodItem)
// // // foodItem.unshift("banana")
// // // console.log(foodItem)
// // // foodItem.shift()
// // // console.log(foodItem)


// // let marks=[23,45,78,94,76]
// // console.log(marks)//array
// // let mark=marks.toString();
// // console.log(mark)//string

// let marvelHeroes=["batman","ironman ","superman"]
// let hindiheroes=["sidarth","varun"]



//slice method->
const animals=["tiger","lion","camel","horse","elephant","cow","zebra","monkey"]
console.log(animals)//all print
console.log(animals.slice(2))
console.log(animals.slice(2,4))
console.log(animals.slice(-2))
console.log(animals.slice(2,-1))