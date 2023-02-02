const HttpWeather = new XMLHttpRequest();
const urlWeather = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true';
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
        var currentWindSpeed = betterWeather.current_weather.windspeed

        console.log(betterWeather);

        document.getElementById("currentTemp").innerHTML = currentTemperature;
        document.getElementById("windSpeed").innerHTML = currentWindSpeed;

        if(currentTemperature > 30){
            //document.getElementById("bubbleImage").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is too hot outside</p>";
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            for(let i = 0; i < hotActivities.length; i++){
                str = hotActivities[i] + " "
                document.getElementById("activities").innerHTML += str
            }
            //document.getElementById("bubbleImage").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("weatherStatement").innerHTML = "<p>It is hot outside</p>";
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
            document.getElementById("weatherStatement").innerHTML = "<p>It is too cold outside</p>";
        
        }
        
    }
}