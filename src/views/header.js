var m = require("mithril")

var Header = { 
    view: function() {
       return m(".slds-grid logo", m("img", {
            width: "100%",
            src: "src/views/solid-logo.png",
        }))
    }
}
module.exports = Header;
