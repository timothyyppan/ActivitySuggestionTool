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
        var currentTime = betterWeather.current_weather.time
        var currentHour = parseInt(currentTime.substring(11, 13))
        var currentWindSpeed = betterWeather.current_weather.windspeed
        //var currentWeatherCode = betterWeather.current_weather.weathercode
        var currentWeatherCode = 0

        console.log(betterWeather);
        console.log(currentHour);
        console.log(typeof currentHour)

        document.getElementById("currentTemp").innerHTML = currentTemperature;
        document.getElementById("windSpeed").innerHTML = currentWindSpeed;

        if(currentTemperature > 30){
            //document.getElementById("bubbleImage").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("activities").innerHTML = "<p>It is too hot outside</p>";
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            for(let i = 0; i < hotActivities.length; i++){
                str = hotActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
        }
        else if(currentTemperature >= 15 && currentTemperature <= 25){
            for(let i = 0; i < warmActivities.length; i++){
                str = warmActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is warm outside</p>";

        }
        else if(currentTemperature >= 5 && currentTemperature <= 15){
            for(let i = 0; i < fairActivities.length; i++){
                str = fairActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = " <div class='cloudy'\><span class='cloud'\></span\><span class='cloudx'\></span\></div\>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is fair outside</p>";
        }
        else if(currentTemperature >= 0 && currentTemperature <= 5){
            for(let i = 0; i < coldActivities.length; i++){
                str = coldActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = " <div class='cloudy'\><span class='cloud'\></span\><span class='cloudx'\></span\></div\>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is cold outside</p>";
        }
        else if(currentTemperature >= -15 && currentTemperature <= 0){
            for(let i = 0; i < chillyActivities.length; i++){
                str = chillyActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = "<div class='stormy'> <ul> <li></li> <li></li> <li></li> <li></li>  <li></li> <li></li> <li></li> </ul> <span class='snowe'></span> <span class='snowex'></span> <span class='stick'></span> <span class='stick2'></span> </div>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is chilly outside</p>";
        }
        
        if(currentTemperature < -15){
            //document.getElementById("bubbleImage").innerHTML = "<div class='stormy'> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class='snowe'></span> <span class='snowex'></span> <span class='stick'></span> <span class='stick2'></span> </div>";
            document.getElementById("activities").innerHTML = "<p>It is too cold outside</p>";
        
        }

        if(currentWeatherCode == 0){
            document.getElementById("weatherStatement").innerHTML = "<p>The sky is clear</p>";
            if(currentHour >= 18 && currentHour <= 6){
                
            }
            else if (currentHour > 6 && currentHour < 18){
                
            }
        }
        else if(currentWeatherCode <= 3 && currentWeatherCode >= 1){
            document.getElementById("weatherStatement").innerHTML = "<p>The sky is partly cloudy</p>";
        }
        else if(currentWeatherCode == 45 || currentWeatherCode == 48){
            document.getElementById("weatherStatement").innerHTML = "<p>It is foggy</p>";
        }
        else if(currentWeatherCode == 51 || currentWeatherCode == 53 || currentWeatherCode == 55){
            document.getElementById("weatherStatement").innerHTML = "<p>There is a drizzle</p>";
        }
        else if(currentWeatherCode == 56 || currentWeatherCode == 57){
            document.getElementById("weatherStatement").innerHTML = "<p>There is a freezing drizzle</p>";
        }
        else if(currentWeatherCode == 61 || currentWeatherCode == 63 || currentWeatherCode == 65){
            document.getElementById("weatherStatement").innerHTML = "<p>It is raining</p>";
        }
        else if(currentWeatherCode == 66 || currentWeatherCode == 67){
            document.getElementById("weatherStatement").innerHTML = "<p>There is freezing rain</p>";
        }
        else if(currentWeatherCode == 71 || currentWeatherCode == 73 || currentWeatherCode == 75){
            document.getElementById("weatherStatement").innerHTML = "<p>It is snowing</p>";
        }
        else if(currentWeatherCode == 77){
            document.getElementById("weatherStatement").innerHTML = "<p>There are snow grains</p>";
        }
        else if(currentWeatherCode <= 82 && currentWeatherCode >= 80){
            document.getElementById("weatherStatement").innerHTML = "<p>There are rain showers</p>";
        }
        else if(currentWeatherCode == 85 || currentWeatherCode == 86){
            document.getElementById("weatherStatement").innerHTML = "<p>There are snow showers</p>";
        }
        else if(currentWeatherCode == 95){
            document.getElementById("weatherStatement").innerHTML = "<p>It is thunderstorming</p>";
        }
        else if(currentWeatherCode == 96 || currentWeatherCode == 99){
            document.getElementById("weatherStatement").innerHTML = "<p>It is thunderstorming with hail</p>";
        }
        
    }
}