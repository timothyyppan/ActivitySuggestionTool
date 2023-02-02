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


        for(let i = 0; i < fairActivities.length; i++){
            console.log(fairActivities[i])
        }

        if(currentTemperature > 30){
            console.log("Try to stay inside as it is too hot outside")
        }
        if(currentTemperature >= 25 && currentTemperature <= 30){
            for(let i = 0; i < hotActivities.length; i++){
                console.log(hotActivities[i]);
            }
        }
        if(currentTemperature >= 15 && currentTemperature < 25){
            for(let i = 0; i < warmActivities.length; i++){
                console.log(warmActivities[i]);
            }
        }
        if(currentTemperature >= 5 && currentTemperature < 15){
            for(let i = 0; i < fairActivities.length; i++){
                console.log(fairActivities[i]);
            }
        }
        if(currentTemperature >= 0 && currentTemperature < 5){
            for(let i = 0; i < coldActivities.length; i++){
                console.log(coldActivities[i]);
            }
        }
        if(currentTemperature >= -15 && chillyActivities < 0){
            for(let i = 0; i < chillyActivities.length; i++){
                console.log(chillyActivities[i]);
            }
        }
        
        if(currentTemperature < -15){
            console.log("Stay inside its too cold outside")
        }
        
    }
}