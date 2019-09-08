var m = require("mithril")
var weatherCard = require("./weatherCard")
var Header = require("./header")


var Theme = {
    view: function() {
      return m(weatherCard),
      m(Header)
    }
}
module.exports = Theme;