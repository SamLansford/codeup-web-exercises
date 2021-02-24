"use strict";

{
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    let languagesArr = users.filter(function (language) {
        return language.languages.length >= 3
    });

    console.log(languagesArr);
    console.log("This logs is for the log above, for the users with at least 3 languages")

    let emailsArr = users.map(function (email){
        return email.email
    });
    console.log(emailsArr + " displays all emails");

    let yearsTotalArr = users.reduce(function (a,c){
        return a + c.yearsOfExperience;

    },0);
    let averageYears = yearsTotalArr / users.length
    console.log(averageYears + ", The average years with all the people.");

    let longestEmail = users.reduce(function (a,c){
        return (a.email.length > c.email.length) ? a : c;
    });
    console.log(longestEmail.email);
    console.log("This log is for the long above, the person with the longest email.")

    let allUserNames = users.reduce(function (a,c){
        // return a + ', ' + c.name
        return (a.name || a) + ', ' + c.name
    });
    console.log(allUserNames);

    let uniqueLanguages = users.reduce(function (acc,c,index) {
        let ind = index;

        let filteredLanguages = c.languages.filter(function (lang){

        })
    })
}