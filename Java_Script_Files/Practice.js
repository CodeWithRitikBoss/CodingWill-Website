console.log("I am practicing the JS.")

// JS Variables

// var a = 10;
// var b = 12;
// console.log(a + b)
// console.log("The sum of a and b is: "+ a + b)

// var c = "Ritik Verma"
// console.log(c)
// console.log("The value of c is: "+ c)

// console.log(typeof a, typeof b, typeof c)

// let x = "Ritik Verma";
// let y = 12;
// let z = 43.5;
// const p = true;
// let q = undefined;
// let r= null;

// console.log(x, y, z, p, q, r)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// Creating an object

// let obj = {
//     "name": "Ritik Verma",
//     "code": 57054,
//     "salary": 500000
// }
// console.log(obj)

// obj.salary = 600000 // re-initialize the object variables.
// console.log(obj)


// Conditional statements in JS.

// console.log("Conditional statements in JS.");
// let age = 18;
// if(age >= 18){
//     console.log("You can drive.")
// }else{
//     console.log("You can't drive.")
// }


// Loops in JS

// console.log("Loops in JS.")
// // for loop in JS
// for(let i= 0; i<= 5; i++){
//     console.log(i);
// }
// // for each loop in JS
// let obj = {
//     "name": "Ritik",
//     "salary": 500000,
//     "role": "Web developer"
// }
// for(const key in obj){
//     // console.log(key)
//     const element = obj[key]
//     console.log(key, element)
// }
// // for of loop in JS and it is used for interator
// for (const c of "Ritik"){
//     console.log(c)
// }
// // while loop in JS
// let i= 0;
// while(i<= 5){
//     console.log(i)
//     i++
// }
// // do while loop in JS.
// let i= 0;
// do{
//     console.log(i)
//     i++
// }while(i<= 5)


// Functions in JS.
// console.log("Function in JS.")
// function nice(name) {
//     console.log("Hey "+ name +", you are nice!")
//     console.log("Hey "+ name +", you are good!")
//     console.log("Hey "+ name +", your laptop is very fast!")
//     console.log("Hey "+ name +", your bike to good too!")
// }
// nice("Ritik")
// nice("Rohit")
// nice("Shreya")

// function sum(a, b){
//     console.log(a + b)
// }
// sum(2, 4)

// function sum(a, b){
//     return a + b
// }
// result = sum(2, 4)
// console.log(result)

// // Arrow function in JS
// const function1 = (x)=>{
//     console.log("I am an arrow function : "+ x)
// }
// function1(12)
// function1(13)
// function1(14)

// String in JS.
// let name = "Ritik"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5]) // This will throw an error due to undefined.

// let myName = "Ritik", myFriendName = "Shreya"
// console.log("My name is: "+ myName +" and My friend's name is: "+ myFriendName)
// console.log(`My name is: ${myName} and My friend's name is: ${myFriendName}`)

// let str = "I am a String"
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.startsWith("i"))
// console.log(str.startsWith("I"))
// console.log(str.endsWith("g"))
// console.log(str.endsWith("G"))
// console.log(str.slice(1, 8))
// console.log(str.replace("a String", "Ritik"))
// console.log(str)
// console.log(str.trim())
// let strr = "Strr"
// console.log(strr)
// strr = strr.replace("Strr", "RitikVerma")
// console.log(strr)
// console.log(strr.at(0))
// console.log(strr.charAt(1))
// console.log(strr.charAt(22))
// console.log(strr.indexOf("i"))
// console.log(strr.indexOf("Z"))
// console.log(strr.indexOf("i", 2))
// console.log(strr.lastIndexOf("i"))

// let a = "Ritik ", b = "Verma";
// let c = a.concat(b)
// console.log(c)
// console.log(a.concat(b))
// console.log(a.concat(b, " is a Programmer.", " and his friend is Shreya."))


// // Array in JS.
// let arr = [12, 23, 34, 45]
// // Index:  0   1   2   3

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// arr[0] = 2323
// console.log(arr)
// console.log(typeof arr)

// // array functions
// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.pop())
// console.log(arr)
// arr.push(1212) // this will insert element at the end of an array.
// console.log(arr)
// console.log(arr.push(232))// and this will return length of the push element
// console.log(arr)
// arr.unshift("Shreya") // This will insert element at the start of an array.
// console.log(arr)
// arr.pop() // this will remove item at the end of an array.
// console.log(arr)
// arr.shift() // this will remove item at the start of an array.
// console.log(arr)
// delete arr[1] // This will remove the element at given index but it will empty that index.
// console.log(arr)
// console.log(arr.indexOf(1212))
// arr.push("Ritik")
// console.log(arr)

let arr1 = [112, 23, 34, 45]

console.log(arr1)
arr1.sort()
console.log(arr1.sort())
