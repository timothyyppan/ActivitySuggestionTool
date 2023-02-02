const Http = new XMLHttpRequest();
const url = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true';
Http.open("GET", url);
Http.send();

const hotActivities = [
    "Kayaking",
    "Canoeing",
    "Swimming",
    "Tennis",
    "Volleyball",
    "Cycling",
    "Soccer",
    "Running",
    "Walking",
    "Golf",
    "Beach Day",
    "Backyard BBQ",
]

const warmActivities = [

]

const fairActivities = [

]

const coldActivities = [

    "Snowball Fight"

]

const chillyActivities = [

]

Http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        var test = Http.responseText
        var betterTest = JSON.parse(test)
        var latitude = betterTest.latitude
        var longitude = betterTest.longitude
        var currentTemperature = betterTest.current_weather.temperature
        var currentTime = betterTest.current_weather.time
        var currentWindDirection = betterTest.current_weather.winddirection
        var currentWindSpeed = betterTest.current_weather.windspeed

        console.log(betterTest)
        console.log(latitude)
        console.log(longitude)
        console.log(currentTemperature)
        console.log(currentTime)
        console.log(currentWindDirection)
        console.log(currentWindSpeed)

        if(currentTemperature > 30){
            console.log("Try to stay inside as it is too hot outside");
            document.getElementById("ph").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("ew").innerHTML = "<p>weather is too hot</p>";
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            console.log(hotActivities);
            document.getElementById("ph").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("ew").innerHTML = "<p>weather is hot</p>";
        }
        else if(currentTemperature >= 15 && currentTemperature <= 25){
            console.log(warmActivities);
            document.getElementById("ph").innerHTML = "<div class='hot'\> <span class='sun'></span\> <span class='sunx'></span\> </div>";
            document.getElementById("ew").innerHTML = "<p>weather is warm</p>";

        }
        else if(currentTemperature >= 5 && currentTemperature <= 15){
            console.log(fairActivities);
            document.getElementById("ph").innerHTML = " <div class='cloudy'\><span class='cloud'\></span\><span class='cloudx'\></span\></div\>";
            document.getElementById("ew").innerHTML = "<p>weather is fair</p>";
        }
        else if(currentTemperature >= 0 && currentTemperature <= 5){
            console.log(chillyActivities);
            document.getElementById("ph").innerHTML = " <div class='cloudy'\><span class='cloud'\></span\><span class='cloudx'\></span\></div\>";
            document.getElementById("ew").innerHTML = "<p>weather is chilly</p>";
        }
        else if(currentTemperature >= -15 && currentTemperature <= 0){
            console.log(coldActivities);
            document.getElementById("ph").innerHTML = "<div class='stormy'> <ul> <li></li> <li></li> <li></li> <li></li>  <li></li> <li></li> <li></li> </ul> <span class='snowe'></span> <span class='snowex'></span> <span class='stick'></span> <span class='stick2'></span> </div>";
            document.getElementById("ew").innerHTML = "<p>weather is cold</p>";
        }
        else{
            console.log("Stay inside its too cold outside")
            document.getElementById("ph").innerHTML = "<div class='stormy'> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class='snowe'></span> <span class='snowex'></span> <span class='stick'></span> <span class='stick2'></span> </div>";
            document.getElementById("ew").innerHTML = "<p>Stay inside its too cold outside</p>";
        
        }
    }
}
