// // // // // // // // // // // // // //Type of function

// // // // // // // // // // // // // function myfunction(){
// // // // // // // // // // // // //     console.log("today is a beautiful day")
// // // // // // // // // // // // //     console.log("we learn js function")
// // // // // // // // // // // // // }
// // // // // // // // // // // // my Function()
// // // // // // // // // // // // my Function()
// // // // // // // // // // // // my Function()
// // // // // // // // // // // TYpe B function
// // // // // // // // // // // function myFunction(msg){
// // // // // // // // // // console.log(msg)
// // // // // // // // // // }
// // // // // // // // // myFunction("developement")
// // // // // // // // // myFunction("javascript")

// // // // // // // // // function myFunction(a,b){
// // // // // // // // //     console.log(a+b)
// // // // // // // // // }
// // // // // // // // // myFunction(2,3)

// // // // // // // //  function countVowels(str){
// // // // // // // //     let count=0;
// // // // // // // //     for(const char of str){
// // // // // // // //         if(
// // // // // // // //             char==="a"|| char==="e"|| char==="i"||char==="o"|| char==="u"
// // // // // // // //         ){
// // // // // // // //             count++;
// // // // // // // //         }

// // // // // // // //     }
// // // // // // // //     console.log(count)
// // // // // // // //  }
// // // // // // // //  countVowels("apple")


// // // // // // // //  let arr=[1,2,3,4,5,6,7,8,9]
// // // // // // // //  arr.forEach(function printVal(val){
// // // // // // // //     console.log(val)
// // // // // // // //  }
// // // // // // // // )
// // // // // // //  let arr=["goa","pune","thane","mumbai"]
// // // // // // //  arr.forEach((val)=>{
// // // // // // //     console.log(val)
// // // // // // //  })



// //for a given array of numbers,print the square of each value using forEach loop.
// //let arr=[1,2,3,4,5,6,7]
// // let arr=[1,2,3,4,5,6,7]
// // arr.forEach((nums)=>{
// //     console.log(nums*nums)

// // })



// // // // //create a function that reverse an array.
// // // // var arr=[1,2,3,4,5]
// // // // let revArr=[];
// // // // for(let i=arr.length-1;i>=0;i--){
// // // //     revArr.push(arr[i])
// // // // }
// // // // console.log("reverse array:",revArr)


// // // //create a function that filter out negative numbers.
// // // let arr=[2,-4,6,-3,-1,8]
// // // for(let i=0;i<arr.length;i++){
// // //     if( )
// // // }

// //map method:-
// // let nums=[6,8,3,2]
// // let newArr=nums.map((val)=>{
// //     return val*val;

// // })
// // console.log(nums)
// // console.log(newArr)



// //filter method:-

// let arr=[1,2,3,4,7,8,9]
// let evenArr=arr.filter((val)=>{
//     return val % 2 ===0;
// })
// console.log(evenArr)

//1%2=1 !==0 ->odd
//2%2=0 ===0 ->even
//3%2=1 !==0 ->odd
//4%2=0 ===0 ->even

//we  are given array of marks of students.filter out of the mark of student that score more than 90.
//marks=[78,90,45,90,95,97,70]
let marks=[78,89,90, 53,95,28,96]
let topper=marks.filter((val)=>{
    return val >= 90;
})
console.log(topper)