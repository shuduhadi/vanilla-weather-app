function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let city = document.querySelector("#city");
    let description = document.querySelector("#details");
    let humidity = document.querySelector("#humdity");
    let windSpeed = document.querySelector("#wind-speed");
    let time = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);


    time.innerHTML = formatDate(date);
    city.innerHTML = response.data.city;
    description.innerHTML = response.data.condition.description;
    humidity.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
};



function searchCity(city) {
    let apiKey = "631bd09a2fb057b9c4c6tb8c42fcdcob";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);


}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    searchCity(searchInput.value);
}

let searchForm = document.querySelector('#search-form');
searchForm.addEventListener("submit", handleSearch);

searchCity("New York");