const apiKey = '0fd86441830143c3acdba86b53fe22f0';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-img img")

async function checkWeather(city){
 
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#weatherMain").innerHTML = data.weather[0].description;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>&deg;c</sup>";
        document.querySelector("#humidity-percent").innerHTML = data.main.humidity + " %";
        document.querySelector("#pressure-degree").innerHTML = data.main.pressure + "  mbar";
        document.querySelector("#wind-speed").innerHTML = data.wind.speed + " km/h";

        // Create date object and options inside the function to get current date each time
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        };
        document.querySelector("#date").innerHTML = date.toLocaleString('en-US', options);

        // const currentDate = new Date();
       // document.querySelector("#date").innerHTML = currentDate.toDateString();   

        // weather image set
        switch (data.weather[0].main){
            case "Clouds":
                weatherIcon.src = "image/sunnycloud.png";
                break;
            case "Clear":
                weatherIcon.src = "image/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "image/heavyrain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drissle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Thunderstorm":
                weatherIcon.src = "image/thunder.png";
                break;
            case "Haze":
                weatherIcon.src = "image/haze.png";
                break;
            default:
                weatherIcon.src = "image/sunnycloud.png";
                break;
        }
    }

searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const location = searchBox.value.trim();
    if (location) {
        checkWeather(location);
        searchBox.value = "";
    } else {
        alert("Please enter a valid location.");
    }
});
