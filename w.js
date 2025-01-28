const apiKey = '1bd8b10feffba4d30da058a15bda5a39';
const city = 'Hyderabad'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
       
        const cityName = data.name;
        const minTemp = data.main.temp_min;
        const maxTemp = data.main.temp_max;
        const humidity = data.main.humidity;

        
        document.getElementById('city-name').textContent = `City: ${cityName}`;
        document.getElementById('min-temp').textContent = `Min Temp: ${minTemp}°C`;
        document.getElementById('max-temp').textContent = `Max Temp: ${maxTemp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('city-name').textContent = 'City: Error';
        document.getElementById('min-temp').textContent = 'Min Temp: Error';
        document.getElementById('max-temp').textContent = 'Max Temp: Error';
        document.getElementById('humidity').textContent = 'Humidity: Error';
    });