function calculateWindChill(temperature, windSpeed) {
    // Check if inputs are valid
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 
            35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) +
            (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return the result rounded to 2 decimal places
    } else {
        return "N/A"; // Wind chill calculation is not valid for these inputs
    }
}
document.getElementById('calculateButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('result').innerText = `Wind Chill: ${windChill} °F`;
});