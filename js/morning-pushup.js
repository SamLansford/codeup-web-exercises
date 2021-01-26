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

function firstLastArray(arr) {
    let bucket = [];
    bucket.push(arr[0]);
    bucket.push(arr[arr.length - 1]);
    return bucket;
}


function firstLastArray(arr) {
    let bucket = [];
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i].length < arr.length -1) {
            bucket.push(arr[i])
        }
    }
    return bucket;
}