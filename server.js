//Dependencies

var express = require("express");
var bodyParser = require("body-parser");


//Sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

//parse application
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Static directory
app.use(express.static("./src"));

app.listen(PORT, function() {
    console.log("app listening on PORT" + PORT);
})