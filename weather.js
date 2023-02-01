const Http = new XMLHttpRequest();
const url = 'https://api.open-meteo.com/v1/forecast?latitude=44.23&longitude=-76.50&hourly=temperature_2m&current_weather=true';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(Http.responseText)
    }
}