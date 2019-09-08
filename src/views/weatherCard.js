var m = require("mithril")
var Card = require("../models/Card")

// m("h1", {class: "title"}, "My first app"),

module.exports = {
    oninit: Card.loadCities,
    view: function() {
        console.log(Card);
        return m(".card-container slds-grid slds-gutters slds-size_1-of-4 slds-box_medium", Card.cities.map(function(city) {
            return m("article", {class: "slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"},
             [
                 m(".slds-card__header slds-grid", [ 
                m("header", {class: "slds-media slds-text-heading_large slds-has-flexi-truncate"}, city.name),
            ]),
                m(".slds-media__body slds-text-heading_medium", city.main.temp)
            ])
        }))
    }
}