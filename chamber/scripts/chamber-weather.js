document.addEventListener('DOMContentLoaded', () => {
    const currentTemp = document.querySelector('#current-temp3');
    const weatherIcon = document.querySelector('#weather-icon3');
    const captionDesc = document.querySelector('figcaption');
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.7&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
    ;

    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log("weather-data:", data);
                displayResults(data);
            } else {
                const errorResponse = await response.json();
            console.log("Error response:", errorResponse);
            throw new Error(errorResponse.message || "Failed to fetch weather-data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

    apiFetch();

    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp.toFixed(1)} &deg;F`; // Correct access to temp
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Correct access to icon
        let desc = data.weather[0].description; // Correct access to description
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc; 
    }
});
