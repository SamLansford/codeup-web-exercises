"use strict"

function fizzbuzz() {
    for (let i=1; i < 101; i++){
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// return average of numbers
function mean(sequence) {
    let sum = 0;
    for (let i = 0; i < sequence.length; i+=1) {
        sum += sequence[i];
    }
    return sum / sequence.length;
}

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let total = 0;
function average() {
    for (let i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    let avg = total / numArray.length;
    return avg;
    console.log(avg);
}
console.log(average());

const x = 20;
let answer;

if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}