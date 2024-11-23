document.addEventListener('DOMContentLoaded', () => {
    const currentTemp = document.querySelector('#current-temp3');
    const weatherIcon = document.querySelector('#weather-icon3');
    const captionDesc = document.querySelector('figcaption');
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.59&lon=-83.7&exclude=hourly,daily&appid=d48b6333843a424ea53795c45c6bf743';
    ;

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    apiFetch();

    function displayResults(data) {
        currentTemp.innerHTML = `${data.current.temp.toFixed(1)} &deg;F`; // Correct access to temp
        const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`; // Correct access to icon
        let desc = data.current.weather[0].description; // Correct access to description
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc; 
    }
});
