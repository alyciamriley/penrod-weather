import m from "mithril";
var root = document.body;
var Theme = require("./views/theme");
var weatherCard = require("./views/weatherCard")

m.route(root, "/splash", {
    "/splash": Theme,
})