"use strict"

function testFunction(callback, input, output) {
    return callback(input) === output;
}

function returnInputAsOutput(input) {
    return input;
}

console.log(testFunction(returnInputAsOutput, 'bob', 'bob'));
console.log(testFunction(returnInputAsOutput, 2, 2));
console.log(testFunction(returnInputAsOutput, true, true));

