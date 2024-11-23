

     const currentTemp = document.querySelector('#current-temp');
     const weatherIcon = document.querySelector('#weather-icon');
     const captionDesc = document.querySelector('figcaption');
     const forecastContainer = document.querySelector('#forecastContainer');
     const urlWR = 'https://api.openweathermap.org/data/2.5/weather?lat=32.59&lon=-83.7&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
     const urlW = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.7&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
    

    async function apiFetch() {
        try {
            const response = await fetch(urlWR);
            if (response.ok) throw Error(await response.text());
            const currentData = await responseCurrent.json();
            displayCurrentWeather(currentData);

            const responseForecast = await fetch(urlW);
            if (!responseForecast.ok) throw Error(await responseForecast.text());
            const forecastData = await responseForecast.json();
            displayForecast(forecastData);
            
        
         } catch (error) {
        console.error(error);
    }
}  

    function displayCurrentWeather(data) {
        currentTemp.innerHTML = `${data.main.toFixed(1)} &deg;F`; 
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        const desc = data.weather[0].description; 
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc; 
    } 

    function displayForecast(data)  {
        forecastContainer.innerHTML = ``;
        
        data.list.forEach((forecast) => {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');

            const forecastTemp = `$(forecast.main.temp.toFixed(1)} &deg;F`;
            const forecastIconSrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            const desc = forecast.weather[0].description;
            const forecastTime = new Date(forecast.dt * 1000).toLocaleTimeString();

            forecastItem.innerHTML = `
            <h3>${forecastTime}</h3>
            <img src="${forecastIconSrc}" alt="${desc}";
            <p>${desc}</p>
            <p>${forecastTemp}</p>
            `;

            forecastContainer.appendChild(forecastItem);
           
        });
    }

     apiFetch();
 

   

