# 🌦️ Weather App

Search any city and see its current weather plus a 5-day forecast.

🔗 **Live demo:** [swnweather1.netlify.app](https://swnweather1.netlify.app/)

## Features

- City search
- Current temperature (°C), condition description and icon
- Humidity and wind speed
- Local day and time of the last update
- 5-day forecast with daily highs and lows
- Loads New York by default on first visit

## Tech stack

| Part | Tool |
|---|---|
| Markup & styling | HTML5, CSS3 (Montserrat font) |
| Logic | Vanilla JavaScript |
| HTTP requests | [Axios](https://axios-http.com/) |
| Weather data | [SheCodes Weather API](https://www.shecodes.io/learn/apis/weather) (current + forecast) |
| Hosting | Netlify |

## Run locally

No build step needed:

```bash
git clone https://github.com/shuduhadi/vanilla-weather-app.git
cd vanilla-weather-app
# open index.html in your browser, or serve it:
python -m http.server 8000
```

## Project structure

```
index.html     # page layout
src/index.js   # API calls, date formatting, rendering current weather + forecast
src/index.css  # styles
```

## What I practised

- Calling a REST API with Axios and handling JSON responses
- DOM manipulation and building HTML from data
- Working with Unix timestamps and JavaScript `Date`
- Deploying a static site to Netlify

---

Coded by [Shudu Hadi](https://github.com/shuduhadi) as part of the SheCodes programme.
