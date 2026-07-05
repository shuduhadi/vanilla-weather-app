function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let temperature = response.data.temperature.current;
    
    city.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


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