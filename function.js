// /**
//  * Functions Continued
 

// Things to remember

// *DRY - Don't Repeat Yourself
// *Good input (Garbage in garbage out)
// */
// // 2 Ways to write a function
// // the difference between the two is only the function declaration 
// // bcuz it gets hoist'ed to the top of the code
// // typeof tells you the type of value a certain line of code has




// // //function Declaration 

// // function sayHello (name) {
// //     console.log("Hello" + name + "!")
// // }
// // sayHello("Toby")


// // // Function Expression



// // const sayHelloAgain = function (name) {
// //     if (typeof name !== "string" ) {
// //       console.log("Input was not a string, Try again")
// //       return
// //     }
// //     console.log("Hello " + name + "!")
// //   }
  
// //   sayHelloAgain(20)

// // Arrow functions 
// // with an example of default parameters.
// // Arrow functions don't hoist to the top of code
// // implitcit return of a single expression 

// // const add = (num1, num2) => num1 + num2

// // console.log(add(120000, 2))

// function areBothEven(n1, n2){
//     if (typeof n1 !== "number" && typeof n2 !== "number") {
//         console.log("is not a number")
//         return
//     } else{
//         return !(n1 % 2) && !(n2 % 2);
//     }
// }

// // 0-falsey
// // anything that isn'y zero is truthy 
// // "christina" - truthy 
// // "" - falsey 

// console.log(areBothEven(2, "anton")) 


//   // Example of truthy and falsey in a real scerniao
// // const arr = []

// // if (arr.length) {
// //   console.log("I have elements!!")
// // } else {
// //   console.log("i'm empty:(")
// // }


// console.log(areBothEven(2, 8))


