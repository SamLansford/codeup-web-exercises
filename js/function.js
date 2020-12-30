"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 *
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return "Hello, " + name + "!";
// }


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello("Sam");
// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = "Sam";
// console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(num) {
//     return num === 2;
// }
// console.log(random);
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip(x, y) {
//     return x * y;
// }
// console.log(calculateTip(0.20, 20));
// console.log(calculateTip(0.25, 25.50));
// console.log(calculateTip(0.15, 33.42));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var tipAmount = prompt("How much would you like to tip ?") /100;
// var totalOfTheBill = prompt("Tell me how much your bill is and we will give you, your tip amount.");
// alert("You should tip $" + calculateTip(tipAmount, totalOfTheBill) + " Thank you, come again soon! ");


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applydiscount(x, y) {
//     var price = x;
//     var percentOff = y;
//     var discountPrice = price - (price * percentOff);
//     return discountPrice;
// }
// console.log(applydiscount(45.99, 0.12));
// console.log(applydiscount(20, .2));



// function isUpperCase(str) {
//     return str.toUpperCase() === str;
// }
//
// console.log(isUpperCase("Bob"));
// console.log(isUpperCase("bob"));


// var mightBeFive = 5;
// if (mightBeFive === 5) {
//     console.log("Yep, mightBeFive was set to the value of 5.")
// }
//
// console.log("You'll always see me"); //when anything in mightBeFive is anything that is not 5


// function isItANumber(paramenter) {
//     if (typeof paramenter === "number") {
//         return "Yep, " + paramenter +" is a number."
//     }
// }

// console.log(isItANumber("Jim"));
// console.log(isItANumber(74));
//
// var outOfMilk = true;
//
// if (outOfMilk) {
//     console.log("Headed to store for milk.");
// }
//
// if (outOfMilk === false) {
//     console.log("Time to enjoy come cereal!!");
// }
//
//
// var hasACow = false;
//
// if (hasACow) {
//     console.log("Milk the cow.");
// } else {
//     console.log("Going to store.")
// }

function isItANumber(paramenter) {
    if (typeof paramenter === "number") {
        return "Yep, " + paramenter +" is a number."
    } else {
        return "Nope, " + paramenter + " is not a number."
    }
}
console.log(isItANumber(17));
console.log(isItANumber("Jim"));

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored,
// find the final points for the team and return that value.

function points(twoPointers, threePointers){
    return twoPointers * 2 + threePointers * 3;
}

console.log(points(2,6));