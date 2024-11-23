const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecastContainer');

const urlWR = 'https://api.openweathermap.org/data/2.5/weather?lat=32.59&lon=-83.7&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';  // Current weather
const urlW = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.7&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';  // 3-day forecast

async function apiFetch() {
    try {
        // Fetch current weather data
        const response = await fetch(urlWR);
        if (!response.ok) throw Error(await response.text());
        const currentData = await response.json();
        displayCurrentWeather(currentData);

        // Fetch forecast data
        const responseForecast = await fetch(urlW);
        if (!responseForecast.ok) throw Error(await responseForecast.text());
        const forecastData = await responseForecast.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} &deg;F`; // Display current temperature
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Get weather icon
    const desc = data.weather[0].description; // Get weather description
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';  // Clear the forecast container

    // Loop through the forecast data and display the next 3 days
    // We'll only take the first forecast for each day (at 12 PM, since forecast data is every 3 hours)
    const days = ["Today", "Tomorrow", "Day After Tomorrow"];  // Just for display

    let dayIndex = 0;
    data.list.forEach((forecast, index) => {
        // We're interested in the 12 PM data for each day, so we'll grab the first forecast that is close to that time.
        if (forecast.dt_txt.includes('12:00:00')) {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            const forecastTemp = `${forecast.main.temp.toFixed(1)} &deg;F`;  // Get the temperature
            const forecastIconSrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`; // Get the weather icon
            const desc = forecast.weather[0].description; // Get the weather description
            const forecastTime = days[dayIndex]; // Display day (Today, Tomorrow, etc.)

            forecastItem.innerHTML = `
                <h3>${forecastTime}</h3>
                <img src="${forecastIconSrc}" alt="${desc}">
                <p>${desc}</p>
                <p>${forecastTemp}</p>
            `;

            forecastContainer.appendChild(forecastItem);
            dayIndex++;
        }

        // Stop after we've displayed 3 days
        if (dayIndex >= 3) return;
    });
}

apiFetch();


     