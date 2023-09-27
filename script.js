const apiKey="1653500c022915f63d987d238318bd1e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.windy').innerHTML=data.wind.speed + " km/hr";
}

    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })

