var m = require("mithril")

module.exports = {
    oninit: Card.loadCities,
    view: function() {
        console.log(Card)
        return m(".card-div", 
        Card.cities.map(function(city) {
            return m(".slds-card", [
                m(".slds-card__header", city.name),
                m(".slds-card__body", city.main.temp)
            ])
        }))

    }
}