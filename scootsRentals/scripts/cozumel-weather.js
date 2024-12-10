const currentTemp = document.querySelector('#current-temp3');
const weatherIcon = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('figcaption');
const currentHumidity = document.querySelector('#current-humidity');
const weatherTomorrow = document.querySelector(`#tomorrow`);

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
    }
    }
  } catch (error) {
    console.log(error);
  }

}


apiFetch ();

function displayResults(data)   {
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
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate());

  const options = {weekday: 'short', month: 'short', day: 'numeric' };
  const formattedTomorrow = tomorrow.toLocaleDateString(`en-US`, options);

  let dayIndex = 0;
  data.list.forEach((forecast) => {

    if (forecast.dt_txt.includes(`15:00:00`)) {

      if (dayIndex >= 0) return;

      const forecastItem = document.createElement('div');
      forecastItem.classList.add('weather-info');

      const highTemp = `${forecast.main.temp_max.toFixed(1)} &deg;F`;

      let forecastTime = '';
      if (dayIndex === 0) {
        forecastTime = formattedTomorrow;
      }

      forecastItem.innerHTML = `
      <h4>${forecastTime}</h4>
      <p>High: ${highTemp}`;
    }


  });
}

apiFetch();