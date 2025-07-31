async function searchWeather() {
  const city = document.getElementById('weatherCity').value;
  const resultDiv = document.getElementById('weatherResult');
  resultDiv.innerHTML = "<em>Searching...</em>";

  if (!city) {
    resultDiv.innerHTML = "<em>Please enter a city.</em>";
    return;
  }

  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data && data.weather && data.weather.length > 0) {
      resultDiv.innerHTML = `
        <div class="weather-card">
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
          <p>🌡️ <strong>${data.main.temp}°C</strong></p>
          <p>Feels like: ${data.main.feels_like}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind: ${data.wind.speed} m/s</p>
        </div>
      `;
    } else if (data.error) {
      resultDiv.innerHTML = `<em>${data.error}</em>`;
    } else {
      resultDiv.innerHTML = "<em>No weather found for this city.</em>";
    }
  } catch (e) {
    resultDiv.innerHTML = "<em>Error fetching weather. Please try again.</em>";
  }
}
