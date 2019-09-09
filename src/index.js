import m from "mithril";
var root = document.body;
var weatherCard = require("./views/weatherCard")

m.route(root, "/splash", {
    "/splash": weatherCard,
})