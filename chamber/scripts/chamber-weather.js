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

    // Get today's date, tomorrow, the day after tomorrow, and two days after tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);  // Set to tomorrow
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);  // Set to the day after tomorrow
    const twoDaysAfterTomorrow = new Date(today);
    twoDaysAfterTomorrow.setDate(today.getDate() + 3);  // Set to two days after tomorrow

    // Format dates to a readable format (e.g., "Nov 23, 2024")
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options);
    const formattedDayAfterTomorrow = dayAfterTomorrow.toLocaleDateString('en-US', options);
    const formattedTwoDaysAfterTomorrow = twoDaysAfterTomorrow.toLocaleDateString('en-US', options);

    // Loop through the forecast data and display the next 3 days
    let dayIndex = 0;
    data.list.forEach((forecast) => {
        // We're interested in the 12 PM data for each day, so we'll grab the first forecast that is close to that time.
        if (forecast.dt_txt.includes('12:00:00')) {
            // Limit the forecast to only 3 days: tomorrow, day after tomorrow, and two days after tomorrow
            if (dayIndex >= 3) return;  // Stop processing after 3 forecast items

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            // Get high and low temperatures
            const highTemp = `${forecast.main.temp_max.toFixed(1)} &deg;F`;  // Get the high temperature
            const lowTemp = `${forecast.main.temp_min.toFixed(1)} &deg;F`;  // Get the low temperature

            // Get the formatted date based on the index
            let forecastTime = '';
            if (dayIndex === 0) {
                forecastTime = formattedTomorrow;  // Tomorrow
            } else if (dayIndex === 1) {
                forecastTime = formattedDayAfterTomorrow;  // Day after tomorrow
            } else if (dayIndex === 2) {
                forecastTime = formattedTwoDaysAfterTomorrow;  // Two days after tomorrow
            }

            // Display the date, high, and low temperatures on the same line
            forecastItem.innerHTML = `
                <h3>${forecastTime}</h3>
                <p>High: ${highTemp} | Low: ${lowTemp}</p>
            `;

            forecastContainer.appendChild(forecastItem);
            dayIndex++;
        }
    });
}


apiFetch();


     