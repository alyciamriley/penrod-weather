























// function fetch_weather() {
//     fetch("https://api.openweathermap.org/data/2.5/weather?id=5043799&units=imperial&appid=9b553bddc8f2890875e0441f19e28e46")
//         .then(resp => {
//             if (!resp.ok) {
//                 return idbKeyval.get("weather");
//             }
//             return resp.json();
//         })
//         .catch(() => idbKeyval.get("weather"))
//         .then(data => {
//             let temp = parseInt(data.main.temp);
//             if (temp) $('#weatherMain').html( temp + "&deg;");

//             let status = data.weather[0].main
//             if (status) $('#wthrStatus').html(status);

//             idbKeyval.set("weather", data);
//         })
// }
