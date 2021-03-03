"use strict";

function timeConvert(millisec) {
    return (millisec / 1000);
}

function wait(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (num) {
                resolve("You'll see this after " + timeConvert(num) + " seconds");
            };
        },num)
    });
};
//
wait(3000)
    .then(data => {
        $('#page').html(data)
    })
    .catch(err => {
        console.log(err);
    })


// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function gitHub(user) {
//     fetch(`https://api.github.com/users/${user}/events/public`, {
//         headers:
//             {'Authorization': GITHUB_TOKEN}
//     })
//     .then(response => response.json())
//         .then(data => console.log(data[0]["created_at"]))
//         .catch(error => console.log(error))
//
// }
// gitHub("SamLansford")
{
    const GITHUB_API_URL = 'https://api.github.com';

    function getDateOfLastCommit(username) {
        const ENDPOINT = `/users/${username}/events/public`;
        const CONFIG = {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        }
        return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
            .then(response => response.json())
            .then(events => {
                let mostRecentEvent = events.find((event) => event.type === 'PushEvent');
                let dateOfMostRecentPush = new Date(mostRecentEvent['created_at']).toDateString();
                return dateOfMostRecentPush;
            });
    }

    getDateOfLastCommit('SamLansford')
        .then(console.log)
        .catch(console.error);
}