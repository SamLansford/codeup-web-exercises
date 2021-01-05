(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    var planetsArray =  planetsString.split("|")

    console.log(planetsArray);

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

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf(array, value) {
    var returnArray = [];
    array.forEach(function(element, index, array){
        if (element == value){
            returnArray.push(index);
        }
    });
    return returnArray;
}
console.log(allIndexesOf(fruits,"apple"));
console.log(allIndexesOf(fruits, "guava"));
console.log(allIndexesOf(fruits, "pineapple"));

