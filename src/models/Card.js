var m = require("mithril")

var Card = {
    cities: [],
    loadCities: function() {
        return m.request({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/group?id=4887398,5037649,4684888,5263045&units=imperial&appid=9b553bddc8f2890875e0441f19e28e46",
            withCredentials: false,
        })
        .then(function(city) {
           Card.cities = city.list;
        })
    },
}

module.exports = Card;