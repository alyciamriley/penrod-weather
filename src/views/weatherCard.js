var m = require("mithril")
var Card = require("../models/Card")
var Header = require("../views/header")
var searchBar = require("../views/searchBar")

var weatherCard = {
    // oninit: Card.loadCities,
    view: function () {
        return m(".card-container", [
            m(".header", [
                m(Header)
            ]),
            m(".search-bar", [
                m(searchBar)
            ]),
            // m(".card-container-sub  slds-box_medium", Card.cities.map(function (city) {
            //     var temp = city.main.temp;
            //     temp = temp.toFixed(0) + '°';
            //     var weather = city.weather[0].main;
            //     var icon;
            //     //get icons
            //     if (weather == "Clear") {
            //         icon = "src/images/icons/sunny.png"
            //     }
            //     if (weather == "Rain") {
            //         icon = "src/images/icons/rain.png"
            //     }
            //     if (weather == "Clouds") {
            //         icon = "src/images/icons/cloudy.png"
            //     }
            //     if (weather == "Thunderstorm") {
            //         icon = "src/images/icons/thunder.png"
            //     }
            //     if (weather == "Snow") {
            //         icon = "src/images/icons/snow.png"
            //     }
            //     if (weather == "Mist") {
            //         icon = "src/images/icons/mist.png"
            //     }
            //     return m("article", {
            //             class: "slds-box slds-box_large slds-text-align_center slds-m-around_x-small"
            //         },
            //         [
            //             m(".slds-card__header slds-grid", [
            //                 m("header", {
            //                     class: "slds-media slds-text-heading_large slds-has-flexi-truncate"
            //                 }, city.name),
            //             ]),

            //             m(".slds-media__body slds-text-heading_medium temp  ", temp),
            //             m(".climate", weather, [
            //                 m(".icon", [
            //                     m("img", {
            //                         src: icon,
            //                     })

            //                 ])

            //             ])
            //         ])
            // }), 
            // )
        ])
    }
}


module.exports = weatherCard;