var apiKey = "166a433c57516f51dfab1f7edaed8413";
var city = "springfield";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey;
console.log(queryURL)
//var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    console.log("wind speed: " + response.wind.speed + " mph")

    console.log("humidity: " + response.main.humidity)
    var kTemp = response.main.temp;
    console.log("temperature: " + tempConversion(kTemp) + "˚F")
})



function tempConversion(kelvinTemp){
    var fehrenheit = (kelvinTemp - 273.15) * 9/5 + 32
    return fehrenheit;
}

var fTemp = tempConversion(279)

// Transfer content to HTML
$(".city").html("<h1>" + response.name + " Weather Details</h1>");
$(".wind").text("Wind Speed: " + response.wind.speed);
$(".humidity").text("Humidity: " + response.main.humidity);
$(".temp").text("Temperature (F) " + response.main.temp);

