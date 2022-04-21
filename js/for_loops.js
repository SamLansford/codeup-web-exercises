'use strict'

// function showMultiplicationTable(num) {
//     for (let i = 1; i < 11; i++) {
//         console.log(num + "*" + i + "=" + (num * i));
//     }
// }
// showMultiplicationTable(10);


// for (let i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }



// for (let i = 1; i < 10; i++) {
//     let random = Math.floor(Math.random() * 181) + 20;
//     if (random % 2 === 0) {
//         console.log(random + " it's an even number")
//     } else {
//         console.log(random + ' it is an odd number')
//     }
// }

// for (let i = 1; i <= 9; i++) {
//     let str = '';
//     for (let j = 1; j<= i; j++) {
//         str += i;
//     } console.log(str);
// }


for(let i = 1; i < 10; i+=1) {
    console.log(i.toString().repeat(i));
}

for (let i = 100; i >= 1; i -= 5) {
    console.log(i);
}

// for (let i = 25; i > -1; i-=1) {
//     if (i === 1) {
//         console.log("Tomorrow is Christmas!")
//     } else if (i > 0) {
//         console.log("There are " + i + " days left before Christmas!");
//     } else if (i === 0) {
//         console.log("MerryChristmas!")
//     }
// }