const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecastContainer');

const urlWR = 'https://api.openweathermap.org/data/2.5/weather?lat=32.59&lon=-83.69&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';  // Current weather
const urlW = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.69&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';  // 3-day forecast

async function apiFetch() {
    try {
        
        const response = await fetch(urlWR);
        if (!response.ok) throw Error(await response.text());
        const currentData = await response.json();
        displayCurrentWeather(currentData);

       
        const responseForecast = await fetch(urlW);
        if (!responseForecast.ok) throw Error(await responseForecast.text());
        const forecastData = await responseForecast.json();
        displayForecast(forecastData);

    } catch (error) {
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} &deg;F`; 
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';  

    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);  
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);  
    const twoDaysAfterTomorrow = new Date(today);
    twoDaysAfterTomorrow.setDate(today.getDate() + 3);  

    
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options);
    const formattedDayAfterTomorrow = dayAfterTomorrow.toLocaleDateString('en-US', options);
    const formattedTwoDaysAfterTomorrow = twoDaysAfterTomorrow.toLocaleDateString('en-US', options);

    
    let dayIndex = 0;
    console.log(data.list);
    data.list.forEach((forecast) => {
       
        if (forecast.dt_txt.includes('15:00:00')) {
           
            if (dayIndex >= 3) return;  

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            

            
            const highTemp = `${forecast.main.temp_max.toFixed(1)} &deg;F`;  
            const lowTemp = `${forecast.main.temp_min.toFixed(1)} &deg;F`;
            
          
            let forecastTime = '';
            if (dayIndex === 0) {
                forecastTime = formattedTomorrow;  
            } else if (dayIndex === 1) {
                forecastTime = formattedDayAfterTomorrow;  
            } else if (dayIndex === 2) {
                forecastTime = formattedTwoDaysAfterTomorrow; 
            }

            
            forecastItem.innerHTML = `
                <h4>${forecastTime}</h4> 
                <p>High: ${highTemp} | Low: ${lowTemp}</p> 
            `;

            forecastContainer.appendChild(forecastItem);
            dayIndex++;
        }
    });
}


apiFetch();


     