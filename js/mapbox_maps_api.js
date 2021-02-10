"use strict";

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

favRestaurants.forEach(function (favRestaurant){
    let popup = new mapboxgl.Popup()
        .setHTML('<h2>'+ favRestaurant.name + '</h2>' +
            '<p>' + favRestaurant.information + '</p>')
    new mapboxgl.Marker()
        .setLngLat(favRestaurant.location)
        .setPopup(popup)
        .addTo(map)
})


