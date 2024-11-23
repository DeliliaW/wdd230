const currentTemp = document.querySelector('#current-temp3');
const weatherIcon = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.59&lon=-83.7&units=imperial&exclude=hourly,daily&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
async function apiFetch()   {
  try {
    const response = await fetch(url);
    if (response.ok)  {
        const data =await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text() );
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch ();

function displayResults(data)   {
    currentTemp.innerHTML = `${data.current.temp.toFixed(1)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc; 
}