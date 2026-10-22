

const apiKey ="b62e0dbb6e6ae240ee9c690ddb687b67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function  checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "icons/mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/clear.png";
    }
    document.querySelector(".weather").style.display = "flex";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
