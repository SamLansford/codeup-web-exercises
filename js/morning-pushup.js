// Write a JavaScript function that takes in two numbers, and returns a boolean representing whether the first number is
// evenly divisible by the second number passed into the function. If any argument passed into the function is not a number,
// the function should return false.

function isFactor (x,y) {
    if (isNaN(x) || isNaN(y) || typeof (x+y) !== "number") {
        return false;
    } else {
        return x % y === 0;
    }
}

console.log(isFactor(2,5))


// write a JavaScript function that takes in an array as an argument, and returns a new array containing the first and the last elements of the passed array.

function firstLastOfArray(arr) {
    let bucket = [];
    bucket.push(arr[0])
    bucket
}