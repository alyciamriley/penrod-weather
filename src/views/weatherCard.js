var m = require("mithril")
var Card = require("../models/Card")

module.exports = {
    oninit: Card.loadCities,
    view: function() {
        console.log(Card);
        return m(".user-list", Card.cities.map(function(city) {
            return m(".user-list-item", city.name)
        }))
    }
}