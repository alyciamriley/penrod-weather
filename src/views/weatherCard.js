var m = require("mithril")
var Card = require("../models/Card")
var Header = require("../views/header")

var weatherCard = {
    oninit: Card.loadCities,
    view: function () {
        return m(".card-container", [ 
            m(".header", [
                m(Header)
            ]),
        m(".card-container-sub  slds-box_medium", Card.cities.map(function (city) {
                return m("article", {
                        class: "slds-box slds-box_large slds-text-align_center slds-m-around_x-small"
                    },
                    [
                        m(".slds-card__header slds-grid", [
                            m("header", {
                                class: "slds-media slds-text-heading_large slds-has-flexi-truncate"
                            }, city.name),
                        ]),
                        m(".slds-media__body slds-text-heading_medium", city.main.temp),

                    ])
            }),
        )
    ])
    }
}


module.exports = weatherCard;