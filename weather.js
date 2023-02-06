const HttpWeather = new XMLHttpRequest();
const urlWeather = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true&timezone=America%2FNew_York';
HttpWeather.open("Get", urlWeather);
HttpWeather.send();

HttpWeather.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        var weather = HttpWeather.responseText
        var betterWeather = JSON.parse(weather)
        //var latitude = betterWeather.latitude
        //var longitude = betterWeather.longitude
        var latitude = 43.6532
        var longitude = 79.3832
        var currentTemperature = betterWeather.current_weather.temperature
        var currentDate = betterWeather.current_weather.time.substring(0, 10)
        var currentTime = betterWeather.current_weather.time.substring(11, 16)
        var currentWindSpeed = betterWeather.current_weather.windspeed
        var currentWindDirection = betterWeather.current_weather.winddirection
        var currentWeatherCode = betterWeather.current_weather.weathercode

        console.log(betterWeather)
        document.getElementById("currentTemp").innerHTML = currentTemperature + '°C'
        document.getElementById("windSpeed").innerHTML = currentWindSpeed + " km\/h"
        document.getElementById("windDirection").innerHTML = currentWindDirection + "°"
        document.getElementById("currentDate").innerHTML = currentDate
        document.getElementById("currentTime").innerHTML = currentTime
        document.getElementById("latitude").innerHTML = latitude
        document.getElementById("longitude").innerHTML = longitude
        
        if(currentTemperature > 30){
            document.getElementById("activities").innerHTML = "<p>It is too hot outside</p>"
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            document.getElementById("activities").innerHTML = "<p>Kayaking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canoeing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swimming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tennis<br><br>Volleyball&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cycling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rollerblading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soccer<br><br>Basketball&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Football&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>Golf&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beach Day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Backyard BBQ</p>"
        }
        else if(currentTemperature >= 15 && currentTemperature <= 25){
            document.getElementById("activities").innerHTML = "<p>Walking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tennis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cycling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Golf<br><br>Rollerblading&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soccer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basketball&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Football</p>"
        }
        else if(currentTemperature >= 5 && currentTemperature <= 15){
            document.getElementById("activities").innerHTML = "<p>Walking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soccer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basketball<br><br>Football</p>"
        }
        else if(currentTemperature >= 0 && currentTemperature <= 5){
            document.getElementById("activities").innerHTML = "<p>Walking&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running</p>"
        }
        else if(currentTemperature >= -15 && currentTemperature <= 0){
            document.getElementById("activities").innerHTML = "<p>Snowball Fight&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skiing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Snowboarding<br><br>Tobogganing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Building things out of snow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walking</p>"
        }
        if(currentTemperature < -15){
            document.getElementById("activities").innerHTML = "<p>It is too cold outside</p>"
        }

        if(currentWeatherCode == 0){
            document.getElementById("weatherStatement").innerHTML = "<p>Clear Skies</p>"
        }
        else if(currentWeatherCode <= 3 && currentWeatherCode >= 1){
            document.getElementById("weatherStatement").innerHTML = "<p>Partly Cloudy</p>"
        }
        else if(currentWeatherCode == 45 || currentWeatherCode == 48){
            document.getElementById("weatherStatement").innerHTML = "<p>Foggy</p>"
        }
        else if(currentWeatherCode == 51 || currentWeatherCode == 53 || currentWeatherCode == 55){
            document.getElementById("weatherStatement").innerHTML = "<p>Drizzle</p>"
        }
        else if(currentWeatherCode == 56 || currentWeatherCode == 57){
            document.getElementById("weatherStatement").innerHTML = "<p>Freezing Drizzle</p>"
        }
        else if(currentWeatherCode == 61 || currentWeatherCode == 63 || currentWeatherCode == 65){
            document.getElementById("weatherStatement").innerHTML = "<p>Rain</p>"
        }
        else if(currentWeatherCode == 66 || currentWeatherCode == 67){
            document.getElementById("weatherStatement").innerHTML = "<p>Freezing Rain</p>"
        }
        else if(currentWeatherCode == 71 || currentWeatherCode == 73 || currentWeatherCode == 75){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow</p>"
        }
        else if(currentWeatherCode == 77){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow Grains</p>"
        }
        else if(currentWeatherCode <= 82 && currentWeatherCode >= 80){
            document.getElementById("weatherStatement").innerHTML = "<p>Rain Showers</p>"
        }
        else if(currentWeatherCode == 85 || currentWeatherCode == 86){
            document.getElementById("weatherStatement").innerHTML = "<p>Snow Showers</p>"
        }
        else if(currentWeatherCode == 95){
            document.getElementById("weatherStatement").innerHTML = "<p>Thunderstorms</p>"
        }
        else if(currentWeatherCode == 96 || currentWeatherCode == 99){
            document.getElementById("weatherStatement").innerHTML = "<p>Hailing Thunderstorming </p>"
        }
        
    }
}