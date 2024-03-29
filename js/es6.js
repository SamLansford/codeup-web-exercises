/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array

const newUser = {name: 'sam', email: 'sam.j.lansford@gmail.com', languages: ['html', 'css', 'javascript']};


// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

// var name = 'your_name_here';
// var email = '';
// var languages = [];

const name = newUser.name
const email = newUser.email
const languages = newUser.languages

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
    name,
    email,
    languages,
});

// TODO: replace `var` with `let` in the following variable declarations
// var emails = [];
// var names = [];

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

// users.forEach = (user) => emails.push(user.email);
// users.forEach = (user) => names.push(user.name);


// TODO: replace `var` with `let` in the following declaration
// var developers = [];
let developers = [];

users.forEach(function (user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;


    const info = {names: user.name, emails: user.email, language: user.languages};
    // const {name, email, languages} = info;


    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    developers.push(`${user.name}'s email is ${user.email} ${user.name} knows ${user.languages.join(', ')}`)

});
console.log(developers)
console.table(users)


// TODO: Use `let` for the following variable
// var list = '<ul>';
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers) {

    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + developer + '</li>';
    list += `<li> ${developer} </li>`
}
;
list += '</ul>';

