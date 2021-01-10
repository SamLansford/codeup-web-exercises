(function(){
    "use strict";

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    // var planetsArray =  planetsString.split("|")
    //
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *

     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var breakingPlanets = planetsArray.join("<br>");
    // console.log(breakingPlanets);

    // var listedPlanets = " <ul> <li>" + planetsArray.join("</li> " + " <li>") + "</li> </ul>";
    //
    // console.log(listedPlanets);


    // var listOfPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    //
    // console.log(listOfPlanets);
})();


// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second
// argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.

// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
// function allIndexesOf(array, value) {
//     var returnArray = [];
//     array.forEach(function(element, index, array){
//         if (element == value){
//             returnArray.push(index);
//         }
//     });
//     return returnArray;
// }
// console.log(allIndexesOf(fruits,"apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));
//
// // Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and
// // the second argument should be a value you wish to remove
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll(array, value) {
//     var returnArray = [];
//     array.forEach(function (element, index, array){
//         if (element !== value) {
//             returnArray.push(element);
//         }
//     });
//     return returnArray
// }
//
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));


// Make a function called randomIntBetween(min, max) that returns a random number between
// the min and the max.

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max + min + 1) ) + min;
}

console.log("The Number between max and minimum is " + randomIntBetween(1,90));

// Make a function called coinFlip() that returns either 0 or 1, randomly

function coinFlip() {
    return Math.floor(Math.random() * 2);
};
console.log("You got " + coinFlip() + " on the coin flip");


// Make a function called twoDice() that returns the sum of rolling two six sided dice.

function twoDice() {
    var diceOne = Math.floor(Math.random() * 6) + 1;
    var diceTwo = Math.floor(Math.random() * 6) + 1;
    return diceOne + diceTwo;
};
console.log("The sum of two dices is " + twoDice());

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.

function twentySidedDie() {
    return Math.floor(Math.random() * 20) + 1;
};
console.log("Number from the twenty sided dice is " + twentySidedDie());

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

function twelveSidedDie() {
    return Math.floor(Math.random() * 12) + 1;
};

console.log("Number from the twelve side dice is "  + twelveSidedDie());

// Make a function called tetrahedron() that returns a random integer between 1 and 4.

function tetrahedron() {
    return Math.floor(Math.random() * 4) + 1;
};
console.log("Number from tetrahedron is " + tetrahedron());


// Make a function called rollDie() that returns an integer between 1 and 6.

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
};
console.log("The number you rolled is " + rollDie());

// Make a function called listOfRolls(num) that takes in a number containing how many 6-sided
// dice rolls you want to make. The listOfRolls function should return an array of that length,
// where each element of the array is the result of the rollDie function.

function listOfRolls(num) {
    let returnArray = [];
    for (let i = 0; i < num; i += 1) {
        returnArray.push(rollDie());
    } return returnArray;
};
//let numberOfRolls = prompt("How many time would you like to roll the dice" );
//console.log("Here are the result of the rolls " + listOfRolls(numberOfRolls));


// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
// This function should take in two arguments:
// The first argument is the number of rolls you want to make.
// The second argument is a function that contains the function definition for the type of die you want to roll.
// For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.


function listOfRollsFromDieFunc(numberOfRolls,typeOfDie) {
    let returnArray = [];
    for (let i = 0; i < numberOfRolls; i += 1) {
        returnArray.push(window[typeOfDie].apply());
    }
    return returnArray;
}

// console.log("twelveSidedDie: " + listOfRollsFromDieFunc(10,"twelveSidedDie"))
// console.log("tetrahedron: " + listOfRollsFromDieFunc(16,"tetrahedron"))
// console.log("twentySidedDie: " + listOfRollsFromDieFunc(20,"twentySidedDie"))
// console.log("twoDice: " + listOfRollsFromDieFunc(50,"twoDice"))
let inputTypeOfDie = prompt("What kind of dice would you like to roll? ")
let inputNumberOfRolls = prompt("How many times would you like to role the die?")

let rollResults = listOfRollsFromDieFunc(inputNumberOfRolls,inputTypeOfDie);

alert("Here are your dice roll results: " + rollResults.toString());
