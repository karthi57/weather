const apiKey = "ef59be455a36f30691d74846538a6f4a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".searchCard input");
const searchBtn = document.querySelector(".searchCard button");
const  weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
     if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".city").style.display = "none"
        
     }
     else
     {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "  km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.setAttribute("src", "./images/clouds.png");
    }
    else  if(data.weather[0].main == "Clear"){
        weatherIcon.setAttribute("src", "./images/clear.png")
    }
    else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.setAttribute("src", "./images/drizzle.png")
    }
    else  if(data.weather[0].main == "Rain"){
        weatherIcon.setAttribute("src","./images/rain.png")
    }
    else  if(data.weather[0].main == "Mist"){
        weatherIcon.setAttribute("src","./images/mist.png")
    }

    else  if(data.weather[0].main == "Snow"){
        weatherIcon.setAttribute("src", "./images/snow.png")
    
     }
     document.querySelector(".error").style.display = "none"
     document.querySelector(".city").style.display = "flex"


     }
}

searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event)=>{
    if(event.keyCode === 13){
        checkWeather(searchBox.value)
    }
});