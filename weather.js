const Http = new XMLHttpRequest();
const url = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true';
Http.open("GET", url);
Http.send();

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
    }
}


