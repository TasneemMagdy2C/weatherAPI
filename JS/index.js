
function getWeather() {
    const locationInput = document.getElementById("locationInput").value;
    const apiUrl = fetch(`http://api.weatherapi.com/v1/forecast.json?key=f1405e03e13b41f0b2384843231008&q=${locationInput}&days=3`)
        .then(response => response.json())
        .then(data => displayWeather(data.forecast.forecastday))
        .catch(error => console.error(error));
}

function displayWeather(forecast) {
    const weatherCards = document.querySelector(".weather-cards");
    weatherCards.innerHTML = "";

    forecast.forEach(day => {
        const card = document.createElement("div");
        card.className = "card";

        const date = new Date(day.date);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);

        card.innerHTML = `
            <h2>${formattedDate}</h2>
            <img src=${day.day.condition.icon} alt=${day.day.condition.text}
            <p>${day.day.condition.text}</p>
            <p>High: ${day.day.maxtemp_c}°C</p>
            <p>Low: ${day.day.mintemp_c}°C</p>
        `;

        weatherCards.appendChild(card);
    });
}