"use strict"
console.log("Hello from external JavaScript")
alert('Welcome to my Website!')
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