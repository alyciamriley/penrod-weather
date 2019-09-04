
//Fetch API Data

var xhr = new XMLHttpRequest();

//Open a new connection
var apiKey = "9b553bddc8f2890875e0441f19e28e46";
var city = "Chicago"

xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey, true);
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        console.log("City Name: " + response.name)
        console.log("Temperature(F): " + response.main.temp);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);




