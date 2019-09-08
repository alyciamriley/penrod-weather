import m from "mithril";
var root = document.body;
var Theme = require("./views/theme")

m.route(root, "/splash", {
    "/splash": Theme,
})