"use strict";

// ================= Review, pt deux =================
/*
TODO: When a list item inside of .data-example-container is clicked,
 return its data-value attribute value to the element with an id of #show-data-attr
*/

$(".data-example-container").children().click(function () {
    let dataAttr = $(this).attr("data-value")
    $("#show-data-attr").text(dataAttr)
})

/*
TODO: When a list item inside of .data-example-container is double clicked,
 return its text value to the all elements with a class of .show-list-item-text
*/

$(".data-example-container").children().dblclick(function () {
    let dataText = $(this).text();
    $("#show-data-attr").text(dataText);
})

/*
TODO: When an immediate child element of the parent with an id of #hover-container is hovered
 change the child's text to 'You are hovering here!' and
 add a border to the child.
 Be sure to reset the text and border upon hovering out
*/


$('#hover-container').children().hover(function () {
    let color = $(this).css("border", " 1px solid blue").text("You are hovering here!")
}, function () {
    let oldText = $(this).text()
    $(this).text(oldText)
});

/*
TODO: When an element with the class of .background-color-change is clicked,
 cycle between background-colors of 'red', 'blue', 'green', and back to the default
 the colors should change in the above order
 only affect one element at a time
*/


/*
TODO: When a user enters a string (and only a string) into the input of id #input,
 concatenate that string to what is already in the element with an id of #output
 when the user double clicks the element with an id #output
 the string resets to its original text
*/


