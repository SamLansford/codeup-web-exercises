"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky.";
//     } else if (color === "red") {
//         return "Strawberries are red.";
//     } else if (color === "cyan") {
//         return "I don't know anything about cyan";
//     } else {
//         return (color + " is a great color too");
//     }
// }
//
//
//
// console.log(analyzeColor("red"));
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// let color = randomColor;

// function analyzeColor(color) {
//     switch (color) {
//         case "red":
//             console.log("Roses are red.");
//             break;
//         case "blue":
//             console.log("Oceans are blue.");
//             break;
//         case "cyan":
//             console.log("I don't know anything about cyan.");
//             break;
//         default:
//             console.log(color + " Is a great color too");
//     }
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

// var userColor = prompt("What is your favorite color")
// alert(analyzeColor(userColor));

// switch (userColor) {
//     case "blue":
//         console.log("The color of the sky is blue.");
//         break;
//     case "red":
//         console.log("Roses are red.");
//     case "cyan":
//         console.log("I don't know what cyan is.");
//     default:
//         console.log("is a great color too");
// }


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function  calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 1:
//           return totalAmount - (totalAmount * .1);
//         case 2:
//             return totalAmount - (totalAmount * .25);
//         case 3:
//             return totalAmount - (totalAmount * .35);
//         case 4:
//             return totalAmount - (totalAmount * .5);
//         case 5:
//             return 0;
//         default:
//             return totalAmount;
//     }
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var totalBill = prompt("Your total will be.");
// alert("Your lucky number was." + luckyNumber);
// alert("price before discount." + totalBill);
// var priceAfterDiscount = calculateTotal(luckyNumber, totalBill);
// alert("This is your price after discount " + priceAfterDiscount);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


let confirmNumber = confirm ("Would you like to enter a number?");
if (confirmNumber) {
    let confirmNumber =+ prompt("What number would you like to enter");
    if (isNaN(confirmNumber)) {
        alert("That didn't look like a number.");
    } else {
        evenOrOdd(confirmNumber);
        positiveOrNegative(confirmNumber);
        plusOneHundred(confirmNumber);
        // (confirmNumber % 2 === 0) ? alert("You entered an even number ") : alert("You entered an odd number");
        // (confirmNumber >= 0) ? alert("This number is positive") : alert("This number is negative");
        // alert("This is your number plus 100 and it's equal to " + (confirmNumber + 100));
    }
} else {
    alert("You didn't want to enter a number.");
}

function evenOrOdd(num) {
    (num % 2 === 0) ? alert("You entered an even number ") : alert("You entered an odd number");
}

function positiveOrNegative(num) {
    (num >= 0) ? alert("This number is positive") : alert("This number is negative");
}

function plusOneHundred(num) {
    alert("This is your number plus 100 and it's equal to " + (num + 100));
}

// var randomNumber = Math.floor(Math.random() * 10)
// var i = randomNumber;
// if (i <= 5) {
//     console.log("Number " + randomNumber + " can be in our group")
// } else {
//     console.log("Number " + randomNumber + " can't be in this group")
// }
//
// var i = randomNumber;
// (i % 2 === 0) ? alert("Number " + randomNumber + " is an even number") : alert("Number " + randomNumber + " is an odd number");
// (i >= 0) ? alert("Number " + randomNumber + " is positive") : alert("Number " + randomNumber + " is negative");
//
// function sayHello(name) {
//     return "Hello, " + name + "!";
// }
//
// function randomPositiveEvenNumber() {
//     var randomNumber = Math.ceil(Math.random() * 100) + 10;
//     if (randomNumber % 2 !== 0) {
//         return randomPositiveEvenNumber()
//     }
//
//     return randomNumber;
// }
//
// function plusTwo(x) {
//     return x + 2;
// }
//
// const phraseSplitterEs6 = phrase => phrase.split(" ");