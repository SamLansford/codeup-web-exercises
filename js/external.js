"use strict"
console.log("Hello from external JavaScript")
alert('Welcome to my Website!')

let person1 = {
    firstName: "Sam",
    lastName: "Lansford",
}
person1.email = prompt("Enter your email")
alert("Welcome," + person1.firstName + ' ' + person1.lastName)

var respond = prompt('What is your favorite color');
alert("Great," + respond + " is my favorite color too!");


var dailyRentalRateDollars = parseInt(prompt('What is the daily rental rate in dollars?'))
var littleMermaidDaysRented = parseInt(prompt("How many days was Little Mermaid rented."))
var BrotherBearDaysRented = parseInt(prompt("How many days was Brother Bear rented."))
var HerculesDaysRented = parseInt(prompt("How may days was Hercules rented"))
var totalRentalCost = (littleMermaidDaysRented + BrotherBearDaysRented + HerculesDaysRented) * dailyRentalRateDollars
alert('Total coast is ' + totalRentalCost)

 var googleHours = prompt("How many hours did you work at Google")
 var googleHourlyRateDollars = 400
 var amazonHours = prompt("How many hours did you work at Amazon")
 var amazonHourlyRateDollars = 380
 var facebookHours = prompt("How many hours did you work at Facebook")
 var facebookHourlyRateDollars =350
 var totalMade = ((amazonHourlyRateDollars * amazonHours)+ (facebookHourlyRateDollars * facebookHours)+
     (googleHourlyRateDollars * googleHours))
 alert("Total coast is " + totalMade)

let isClassOpen = confirm("Is there room in the class?");
let isScheduleOpen = confirm("Does this class work with your schedule?")
alert("You may register: " + (isClassOpen && isScheduleOpen))

var areEnoughItemsPurchased = confirm("Did you buy more than 2 items?")
var isOfferValid = confirm("Is the offer still valid?")
var isPremiumMember = confirm("Are you a premium member?")
alert("is the product offer applied: " + (isOfferValid + isPremiumMember))

function Hello() {
    alert("hey there");
}
Hello("codeup");

function isFive(input) {
    return input == 5;
}

console.log(isFive(5));
console.log(isFive("5"));

// Write a function, isShortWord, that takes in a string and returns the boolean value true
// if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(str) {
    return str.length < 5;
}

console.log(isShortWord('hi'))
console.log(isShortWord('everybody'))

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true
// if the passed arguments are the same length. Return false otherwise.

function isSameLength(str1, str2) {
    return str1.length === str2.length
}

console.log(isSameLength('me', 'me'));
console.log(isSameLength('me', 'him'));
console.log(isSameLength('hi', 'me'));

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return
// a substring of the first argument that is as many characters long as the second argument in lowercase.

function getSmallerSegment(str, num) {
    return str.substring(0, num).toLowerCase();
}

console.log(getSmallerSegment("codeup", 6));

//IIFE syntax

(function() {

})();

