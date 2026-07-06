function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#details");
  let humidityElement = document.querySelector("#humdity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  let temperature = response.data.temperature.current;
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML = Math.round(temperature);

  iconElement.innerHTML = `
    <img
      src="${response.data.condition.icon_url}"
      class="weather-app-icon"
      alt="${response.data.condition.description}"
    />
  `;

  getForecast(response.data.city);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML += `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">
            ${formatDay(day.time)}
          </div>

          <div class="weather-forecast-icon">
            <img
              src="${day.condition.icon_url}"
              class="weather-app-icon"
              alt=""
            />
          </div>

          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">
              <strong>${Math.round(day.temperature.maximum)}°</strong>
            </span>

            <span class="weather-forecast-temperature-min">
              ${Math.round(day.temperature.minimum)}°
            </span>
          </div>
        </div>
      `;
    }
  });

  forecastElement.innerHTML = forecastHTML;
}

function getForecast(city) {
  let apiKey = "631bd09a2fb057b9c4c6tb8c42fcdcob";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return days[date.getDay()];
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handleSearch);

searchCity("New York");