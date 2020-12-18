"use strict"

// function testFunction(callback, input, output) {
//     return callback(input) === output;
// }
//
// function returnInputAsOutput(input) {
//     return input;
// }
//
// console.log(testFunction(returnInputAsOutput, 'bob', 'bob'));
// console.log(testFunction(returnInputAsOutput, 2, 2));
// console.log(testFunction(returnInputAsOutput, true, true));



// var x = 20;
//
// while (x < 50) {
//     console.log(x);
//     x=x+10;
// }
//
// function putOnCoat() {
//     let isCold = true;
//     let counter = 0;
//
//     while (isCold) {
//         console.log("I need a coat");
//
//         counter++;
//
//         if(counter === 10) {
//             isCold = false;
//             counter = 10
//             console.log(putOnCoat)
//         }
//     }
// }

//
// var i = 0;
//
//     do {
//         console.log(i);
//         i+=2;
//
//     }while (i <= 20);



// function jeffGoingTooFast(areCosLooking) {
//
//     let copsAreLooking = areCosLooking;
//
//     do {
//         alert("Going too fast!");
//
//         let response = prompt('Is that a cop? Yes or No')
//          {
//             copsAreLooking = true;
//         }
//     }while (!copsAreLooking)
//
//     alert("cops are coming")
// }
//
// jeffGoingTooFast(false)



function fizzBuzz(){

}
    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
}