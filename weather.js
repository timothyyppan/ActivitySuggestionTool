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
            console.log("Try to stay inside as it is too hot outside")
        }
        else if(currentTemperature >= 25 && currentTemperature <= 30){
            console.log(hotActivities)
        }
        else if(currentTemperature >= 15 && currentTemperature < 25){
            console.log(warmActivities)
        }
        else if(currentTemperature >= 5 && currentTemperature < 15){
            console.log(fairActivities)
        }
        else if(currentTemperature >= 0 && currentTemperature < 5){
            console.log(coldActivities)
        }
        else if(currentTemperature >= -15 && chillyActivities < 0){
            console.log(chillyActivities)
        }
        else{
            console.log("Stay inside its too cold outside")
        }
    }
}
