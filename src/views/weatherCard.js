var m = require("mithril")
var Card = require("../models/Card")

module.exports = {
    oninit: Card.loadCities,
    view: function() {
        console.log(Card);
        return m(".card-container", Card.cities.map(function(city) {
            return m(".city-name", city.name, [
                m(".city-temp", city.main.temp)
            ])
        }))
    }
}