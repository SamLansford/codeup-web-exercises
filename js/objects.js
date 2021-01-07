// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    //

    // var person = {
    //     firstName: "Sam",
    //     lastName: "Lansford",
    //     };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    //
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function () {
    //     return  "Hello From " + person.firstName + " " + person.lastName;
    // }
    //
    // console.log(person.sayHello())


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // function displayCurrency(amount) {
    //     return "$" + amount.toFixed(2);
    // }

function calculateDiscount(amount, discountAmountThreshold, discountPercentage){
    if (amount > discountAmountThreshold) {
        return amount * discountPercentage;
    } else {
        return 0;
    } // return (amount > discountAmountThreshold) ? amount * discountPercentage : 0;
}

    shoppers.forEach(function (shopper) {
        let shopperName = shopper.name
        let amountBeforeDiscount = shopper.amount
        let discountPercent =.12
        let discountAmountThreshold = 200;
        let amountOff = calculateDiscount(amountBeforeDiscount,discountAmountThreshold,discountPercent);
        let totalCost = amountBeforeDiscount - amountOff;
        let message = shopperName + " The price before discount is "
               + amountBeforeDiscount + ". The price after the discount is "
               + totalCost;
        console.log(message);
    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */





    var books = [
        {title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams",
            }},
        {title: "A Game of Thrones",
            author: {
                firstName: "George R.R",
                lastName: "Martin",
            }},
        {title: "To Kill A Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee",
            }},
        {title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville",
            }},

        {title: "The Lord of The Rings",
            author: {
                firstName: "J. R.R.",
                lastName: "Tolkien",
            },
        }];

// let books = [
//     {title: "To Kill a Mockingbird", author: {firstName: "Harper ", lastName: "Lee"}},
//     {title: "1984", author: {firstName: "George", lastName: " Orwell"}},
//     {title: "Harry Potter", author: {firstName: "J.K.", lastName: " Rowling"}},
//     {title: "The Lord of the Rings", author: {firstName: "J.R.R.", lastName: " Tolkien"}},
//     {title: "The Great Gatsby", author: {firstName: "F. Scott", lastName: " Fitzgerald"}},
// ]

console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index){
        let bookNumber = index + 1
        console.log("Book # " + bookNumber   + "\n" + book.title + "\n"
                + book.author.firstName + " "
                +  book.author.lastName);
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title,author) {
        let nameArr = author.split(' ');
        let firstName = nameArr[0];
        let lastName = nameArr[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName,
            }
        }
    }


    let booksUsingFunction = [];

    let titles = ["title1","title2","title3"];
    let authors = ["author1","author2","author3"];

    for (let i = 0; i < titles.length; i +=1) {
        booksUsingFunction.push(createBook(titles[i],authors[i]));
    }

    function showBookInfo(book,bookNumber) {
        console.log("Book # " + (bookNumber+ 1));
        console.log("Title:  " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    }

    // books.forEach(function (book,index){
    //     showBookInfo(book,index + 1)
    // })

    books.forEach(showBookInfo);

    // console.log(booksUsingFunction)



// })();




// var beverage1 = {
//     brandName: "rum",
//     type: "liquor",
//     volumeInLiters: 35,
//     priceInCenters: 15,
//     expirationDate: "4/30/2021",
//     dateOfPreviousSips: ["2/18/2021"],
//     isOpen: true,
// }
//
// console.log(beverage1)
//
//
// var beverage2 = {};
// beverage2.brandName = "Rose";
// beverage2.type = "wine";
// beverage2.volumeInLiters = 35;
// beverage2.priceInCenters = 20;
// beverage2.expirationDate = "4/30/2021";
// beverage2.dateOfPreviousSips = ["2/18/2021"];
// beverage2.isOpen = true;
//
// console.log(beverage2);
//
//
//
// var users = [
//     {
//         givenName: "Sam",
//         age: 21
//     },
//     {
//         givenName: "Cathy",
//         age: 34
//     },
//     {
//         givenName: "Karen",
//         age: 43
//     }
// ];
//
//
//
// console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName );
//
// users.forEach(function (user){
//     user.givenName = "John Doe";
//     user.age += 1
// });
//
// console.log(users);
//
// users.forEach(function (user){
//     user.age += 1
// });
//
// console.log(users);
//
//
//
// var dog = {
//     breed: "Husky",
//     weightInPounds: 45,
//     age: 4,
//     color: "blue",
//     canBreed: true,
//     shotRecords: [
//         {
//             date: new Date(),
//             typeOfShot: "Bordetella",
//         },
//         {
//             date: new Date(),
//             typeOfShot: "",
//         },
//     ],
//
//     bark: function () {
//         console.log("Woof! Woof! Woof!");
//     },
//     getOlder: function () {
//         this.age += 1;
//     },
//     disableBreeding: function () {
//         this.canBreed = false;
//     },
//     vaccinate: function (nameOfShot) {
//         this.shotRecords.push({
//             date: new Date(),
//             typeOfShot: nameOfShot
//         });
//     }
// }
// dog.vaccinate("flue");
// console.log(dog)