

     const currentTemp = document.querySelector('#current-temp');
     const weatherIcon = document.querySelector('#weather-icon');
     const captionDesc = document.querySelector('figcaption');
     const urlW = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.59&lon=-83.7&units=imperial&appid=aab874bc1cc2c1c2feb77bf991e1aa7e';
    

    async function apiFetch() {
        try {
            const response = await fetch(urlW);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                //displayResults(data);
                        //first day
        console.log(`${data.list[0].main.temp}`);
        console.log(`${data.list[0].weather[0].description}`);
            } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.toFixed(1)} &deg;F`; 
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
        let desc = data.weather[0].description; 
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc; 


    } 

     apiFetch();
 

    function testF() {
        console.log('Console test');
    }
    testF();

