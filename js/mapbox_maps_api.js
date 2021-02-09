"use strict";

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }

var favRestaurants = [
    {
        name: "huhot",
        information: "huhot is a buffet where you pick your food and people cook it for you",
        location: [-98.57591, 29.54685],
    },
    {
        name: "KungFu noodles",
        information: "Hand-pulled noodles, dumplings & " +
        "steamed buns are the specialties at this modest Chinese restaurant.",
        location: [-98.61865, 29.496402],
    },
    {
        name: "ShiFu Noodles",
        information: "ShiFu Noodle is a new Sichuan-style Chinese noodle house",
        location: [-98.458924, 29.380408],
    }
]

favRestaurants.forEach(function (restaurant){
    let popup = new mapboxgl.Popup()
        .setHTML('<h3>${restaurant.name}</h3><br></p>${restaurant.information}</p>' +
            '<img src="img/huhot.png" width="50px">')
    new mapboxgl.Marker()
        .setLngLat(restaurant.location)
        .setPopup(popup)
        .addTo(map)
})


