      function getWindDirection(degrees) {
        const directions = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West'];
        const index = Math.round(((degrees % 360) / 45)) % 8;
        return directions[index];
      }
      
      function getWeather(lat, long) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid= your api key`)
            .then(response => response.json())
            .then(weatherData => {
                const city = weatherData.name;
                const temp = (weatherData.main.temp - 273.15).toFixed(2);
                const hum = weatherData.main.humidity;
                const gen = weatherData.weather[0].description;
                const wind = (weatherData.wind.speed * 3.6).toFixed(2);
                const direct = weatherData.wind.deg;
                const iconCode = weatherData.weather[0].icon;
                const overview = weatherData.weather[0].main;
    
                return `
                    <p>${city} Weather:</p>
                    <p>Wind: ${wind} km/h ${getWindDirection(direct)}</p>
                    <p>Temp: ${temp} °C</p>
                    <p>Humidity: ${hum} %</p>
                    <p>Overview: ${gen}</p>
                    <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">
                    <p>${overview}</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                return "<p>Chatbot: Sorry, I couldn't fetch the weather data.</p>";
            });
    }