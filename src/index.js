import m from "mithril";
var root = document.body;
var weatherCard = require("./views/weatherCard")
var searchBar = require("./views/searchBar")

m.route(root, "/splash", {
    "/splash": weatherCard,
})