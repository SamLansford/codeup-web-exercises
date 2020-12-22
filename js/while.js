// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i*=2;
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//   var cones = Math.floor(Math.random() * 5) + 1;
//     if (cones <= allCones) {
//         allCones = allCones - cones;
//         console.log(cones + "cones sold");
//     } else {
//         console.log("Can't sell you  " + cones + " cones I only have. " + allCones + " ...");
//     }
// } while (allCones > 0);
// console.log("They are all gone. Guess we are having Noodles next");

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

let shoppingList = 5;
let outOfItems = 0;
let goingShopping = outOfItems;

do {
    goingShopping = shoppingList === 5;
    goingShopping++;
} while (outOfItems);
console.log(goingShopping);