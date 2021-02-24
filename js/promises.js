"use strict";

function timeConvert(millisec) {
    return (millisec / 1000);
}


function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve("You'll see this after " + timeConvert(num) + " seconds");
            } else {
                reject("There is nothing to see here")
            };
        },num)
    });
};

wait(1000)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));