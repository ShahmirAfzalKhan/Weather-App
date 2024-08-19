document.getElementById('searchButton').addEventListener('click', async () => {
  const city = document.getElementById('locationInput').value.toLowerCase();

  try {
    const apiKey = '5560694c5487df96c723cdd3a1997398';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const weatherData = await response.json();

    displayWeather(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    displayError('City not found. Please enter a valid city!');
  }
});

function displayWeather(data) {
  const cityName = data.city.name;
  const currentTemp = data.list[0].main.temp;
  const weatherDescription = data.list[0].weather[0].description;
  const weatherIcon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

  document.getElementById('location').textContent = cityName;
  document.getElementById('temperature').textContent = `${currentTemp}°C`;
  document.getElementById('description').textContent = weatherDescription;

  const forecastContainer = document.createElement('div');
  forecastContainer.classList.add('forecast-container');
  
  const forecastDays = Math.min(5, Math.floor(data.list.length / 8));
  for (let i = 0; i < forecastDays; i++) {
    const forecastDay = data.list[i * 8];
    const date = new Date(forecastDay.dt_txt).toLocaleDateString(undefined, { weekday: 'short' });
    const temp = forecastDay.main.temp;
    const icon = `https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`;

    const forecastElement = document.createElement('div');
    forecastElement.classList.add('forecast-day');
    forecastElement.innerHTML = `
      <h3>${date}</h3>
      <img src="${icon}" alt="Weather Icon">
      <p>${temp}°C</p>
    `;

    forecastContainer.appendChild(forecastElement);
  }

  document.querySelector('.weather-info').appendChild(forecastContainer);
}

function displayError(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
  document.querySelector('.weather-info').appendChild(errorMessage);
}
