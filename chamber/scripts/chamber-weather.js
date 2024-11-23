document.addEventListener('DOMContentLoaded', () => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.7&appid=d48b633843a424ea53795c45c6bf743';
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
        console.error(error);
    }
}

    apiFetch();

    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.toFixed(1)} &deg;F`; 
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        let desc = data.weather[0].description; 
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc; 
    }
});
