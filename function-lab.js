// EXERCISE 1: Write a Function Declaration
// Write a function named computeAreausing the function declaration approach.

// It will have two parameters: width& height.

// It will compute the area of a rectangle (width X height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// Invoke the function to test it.

// function comuteAreaUsing (width, height){
//     let area = width * height
// return("the area of a rectangle with the width " + width + "and a height of " + height + "is" + area "sqaure units")
// }
// console.log(computeAreaUsing(2,4))











// EXERCISE 2: Write a Function Expression
// Write a function named planetHasWaterusing the function expression syntax.

// It will have one parameter: planet.

// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.

// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

// Invoke the function a couple of times to test it!

// const planetHasWaterUsing = (planet) => {
//     planet.toLowerCase();
//     if(planet === "earth" || planet === "mars") {
//         return;
//     } else {
//         return false;
//     }

// }
// console.log(planetHasWaterUsing("MARS"))


const planetHasWaterUsing = (planet) => {
    if(planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
        return true;
    } else {
        return false;
    }
}
console.log(planetHasWaterUsing(9))





// FUNCTION REVIEW QUESTIONS
// ❓ How many different ways are there to define a function?

// There are two different ways to define a function. 
// expressional funcations 
// declaring functions 


// ❓ What's the only practical difference between a function definition and a function expression?

// the declaration function is being hoisted to the top that is the difference 