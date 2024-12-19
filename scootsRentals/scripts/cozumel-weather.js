const currentTemp = document.querySelector('#current-temp3');
const weatherIcon = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('figcaption');
const currentHumidity = document.querySelector('#current-humidity');
const weatherTomorrow = document.querySelector(`#tomorrow`);
const currentMax = document.querySelector('#temp-max');

const urlCoz = 'https://api.openweathermap.org/data/2.5/weather?lat=20.509&lon=-86.946&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.509&lon=-86.946&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';

async function apiFetch()   {
  try {
    const response = await fetch(urlCoz);
    if (response.ok)  {
    const data = await response.json();
    displayResults(data);

    const responseForecast = await fetch(urlF);
    if (response.ok)  {
    const forecastData = await responseForecast.json();
    displayForecast(forecastData);
    }
    }
  } catch (error) {
  }

}


apiFetch ();

function displayResults(data)   {
    currentMax.innerHTML = `${data.main.temp_max.toFixed(1)} &deg;F`;
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)} &deg;F`;
    currentHumidity.innerHTML = `${data.main.humidity.toFixed(0)} %`;
    
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function displayForecast(data) {
  weatherTomorrow.innerHTML = ''; 

  const today = new Date();
  const todayString = today.toLocaleDateString(); 

  console.log('Today:', todayString); // Debugging statement

  let todayMaxTemp = -Infinity; 
  let foundForecastForToday = false;

  
  data.list.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt_txt); 
    const forecastDateString = forecastDate.toLocaleDateString(); 

    
    if (forecastDateString === todayString && forecastDate.getHours() === 15) {
      foundForecastForToday = true; 
      const tempAt3PM = forecast.main.temp_max; 

      console.log('Temp at 3 PM:', tempAt3PM); // Debugging statement

      todayMaxTemp = tempAt3PM;
    }
  });

  
  if (!foundForecastForToday) {
    console.log("No 3 PM forecast data found for today.");
    currentMax.innerHTML = "No data available";
  } else {
   
    currentMax.innerHTML = ` ${todayMaxTemp.toFixed(1)} &deg;F`;
  }

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const formattedTomorrow = tomorrow.toLocaleDateString(`en-US`, options);

  let foundTomorrowForecast = false;

  data.list.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt_txt);
    const forecastHour = forecastDate.getHours();

    if (!foundTomorrowForecast && forecastDate.toLocaleDateString() === tomorrow.toLocaleDateString() && forecastHour === 15) {
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('weather-info');

      const highTemp = `${forecast.main.temp_max.toFixed(1)} &deg;F`;

      forecastItem.innerHTML = `<p>High: ${highTemp}</p>`;
      weatherTomorrow.appendChild(forecastItem);
      foundTomorrowForecast = true;
    }
  });
}
