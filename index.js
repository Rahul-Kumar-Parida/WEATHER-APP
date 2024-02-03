<<<<<<< HEAD
"use strict"
//api calling
const apiKey = "f06249ddd92f595af01d1640ef364625";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//jsCode
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".whter-icon");

async function checkwheather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);

    if(response.status===404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".temp").style.display= "none";
        document.querySelector(".city").textContent= "Not Found😒";
    }else {

        let data = await response.json();

        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="images/mist.png";
        }else if(data.weather[0].main == "Wind"){
            weatherIcon.src ="images/wind.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src ="images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
    document.querySelector(".temp").style.display= "block";
    }
}
searchBtn.addEventListener("click", function(){
    checkwheather(searchBox.value)
=======
"use strict"
//api calling
const apiKey = "f06249ddd92f595af01d1640ef364625";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//jsCode
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".whter-icon");

async function checkwheather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);

    if(response.status===404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".temp").style.display= "none";
        document.querySelector(".city").textContent= "Not Found😒";
    }else {

        let data = await response.json();

        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="images/mist.png";
        }else if(data.weather[0].main == "Wind"){
            weatherIcon.src ="images/wind.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src ="images/snow.png";
        }

        document.querySelector(".error").style.display = "none";
    document.querySelector(".temp").style.display= "block";
    }
}
searchBtn.addEventListener("click", function(){
    checkwheather(searchBox.value)
>>>>>>> 0dd0ae3a46162abf8a4e24cf793dfe1a84cc9cb9
})