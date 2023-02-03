const HttpWeather = new XMLHttpRequest();
const urlWeather = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true&timezone=America%2FNew_York';
HttpWeather.open("Get", urlWeather);
HttpWeather.send();

let str;
const hotActivities = [
    "Kayaking",
    "Canoeing",
    "Swimming",
    "Tennis",
    "Volleyball",
    "Cycling",
    "Rollerblading",
    "Soccer",
    "Basketball",
    "Football",
    "Running",
    "Walking",
    "Golf",
    "Beach Day",
    "Backyard BBQ",
]

const warmActivities = [

    "Walking",
    "Running",
    "Tennis",
    "Cycling",
    "Rollerblading",
    "Soccer",
    "Basketball",
    "Football",
    "Golf",

]

const fairActivities = [

    "Walking",
    "Running",
    "Soccer",
    "Basketball",
    "Football"
    
]

const coldActivities = [

    "Walking",
    "Running"

]

const chillyActivities = [

    "Snowball Fight",
    "Skating",
    "Skiing",
    "Snowboarding",
    "Tobogganing",
    "Building things out of snow",
    "Walking"

]

HttpWeather.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        var weather = HttpWeather.responseText
        var betterWeather = JSON.parse(weather)
        var latitude = betterWeather.latitude
        var longitude = betterWeather.longitude
        var currentTemperature = betterWeather.current_weather.temperature
        var currentDate = betterWeather.current_weather.time.substring(0, 10)
        var currentTime = betterWeather.current_weather.time.substring(11, 16)
        var currentWindSpeed = betterWeather.current_weather.windspeed
        var currentWindDirection = betterWeather.current_weather.winddirection
        var currentWeatherCode = betterWeather.current_weather.weathercode

        console.log(betterWeather)
        document.getElementById("currentTemp").innerHTML = currentTemperature;
        document.getElementById("windSpeed").innerHTML = currentWindSpeed + "km\/s";
        document.getElementById("windDirection").innerHTML = currentWindDirection;
        document.getElementById("currentDate").innerHTML = currentDate
        document.getElementById("currentTime").innerHTML = currentTime
        
        if(currentTemperature > 30){
            document.getElementById("activities").innerHTML = "<p>It is too hot outside</p>";
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            for(let i = 0; i < hotActivities.length; i++){
                str = hotActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
        }
        else if(currentTemperature >= 15 && currentTemperature <= 25){
            for(let i = 0; i < warmActivities.length; i++){
                str = warmActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
        }
        else if(currentTemperature >= 5 && currentTemperature <= 15){
            for(let i = 0; i < fairActivities.length; i++){
                str = fairActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
        }
        else if(currentTemperature >= 0 && currentTemperature <= 5){
            for(let i = 0; i < coldActivities.length; i++){
                str = coldActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
        }
        else if(currentTemperature >= -15 && currentTemperature <= 0){
            for(let i = 0; i < chillyActivities.length; i++){
                str = chillyActivities[i] + "      "
                document.getElementById("activities").innerHTML += str
            }
        }
        
        if(currentTemperature < -15){
            document.getElementById("activities").innerHTML = "<p>It is too cold outside</p>";
        }

        if(currentWeatherCode == 0){
            document.getElementById("weatherStatement").innerHTML = "<p>Clear Skies</p>";
        }
        else if(currentWeatherCode <= 3 && currentWeatherCode >= 1){
            document.getElementById("weatherStatement").innerHTML = "<p>Partly Cloudy</p>";
        }
        else if(currentWeatherCode == 45 || currentWeatherCode == 48){
            document.getElementById("weatherStatement").innerHTML = "<p>Foggy</p>";
        }
        else if(currentWeatherCode == 51 || currentWeatherCode == 53 || currentWeatherCode == 55){
            document.getElementById("weatherStatement").innerHTML = "<p>Drizzle</p>";
        }
        else if(currentWeatherCode == 56 || currentWeatherCode == 57){
            document.getElementById("weatherStatement").innerHTML = "<p>Freezing Drizzle</p>";
        }
        else if(currentWeatherCode == 61 || currentWeatherCode == 63 || currentWeatherCode == 65){
            document.getElementById("weatherStatement").innerHTML = "<p>Rain</p>";
        }
        else if(currentWeatherCode == 66 || currentWeatherCode == 67){
            document.getElementById("weatherStatement").innerHTML = "<p>Freezing Rain</p>";
        }
        else if(currentWeatherCode == 71 || currentWeatherCode == 73 || currentWeatherCode == 75){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow</p>";
        }
        else if(currentWeatherCode == 77){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow Grains</p>";
        }
        else if(currentWeatherCode <= 82 && currentWeatherCode >= 80){
            document.getElementById("weatherStatement").innerHTML = "<p>Rain Showers</p>";
        }
        else if(currentWeatherCode == 85 || currentWeatherCode == 86){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow Showers</p>";
        }
        else if(currentWeatherCode == 95){
            document.getElementById("weatherStatement").innerHTML = "<p>Thunderstorms</p>";
        }
        else if(currentWeatherCode == 96 || currentWeatherCode == 99){
            document.getElementById("weatherStatement").innerHTML = "<p>Hailing Thunderstorming </p>";
        }
        
    }
}