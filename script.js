document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('locationInput').value.toLowerCase();
    const weatherData = {
        islamabad: [
            { day: "Monday", temperature: "30°C", description: "Sunny" },
            { day: "Tuesday", temperature: "32°C", description: "Partly Cloudy" },
            { day: "Wednesday", temperature: "29°C", description: "Cloudy" },
            { day: "Thursday", temperature: "28°C", description: "Rainy" },
            { day: "Friday", temperature: "27°C", description: "Thunderstorms" },
            { day: "Saturday", temperature: "31°C", description: "Sunny" },
            { day: "Sunday", temperature: "33°C", description: "Hot" }
        ],
        lahore: [
            { day: "Monday", temperature: "35°C", description: "Hot" },
            { day: "Tuesday", temperature: "36°C", description: "Sunny" },
            { day: "Wednesday", temperature: "34°C", description: "Partly Cloudy" },
            { day: "Thursday", temperature: "33°C", description: "Cloudy" },
            { day: "Friday", temperature: "32°C", description: "Rainy" },
            { day: "Saturday", temperature: "34°C", description: "Thunderstorms" },
            { day: "Sunday", temperature: "36°C", description: "Sunny" }
        ],
        karachi: [
            { day: "Monday", temperature: "29°C", description: "Sunny" },
            { day: "Tuesday", temperature: "30°C", description: "Partly Cloudy" },
            { day: "Wednesday", temperature: "28°C", description: "Cloudy" },
            { day: "Thursday", temperature: "27°C", description: "Rainy" },
            { day: "Friday", temperature: "26°C", description: "Thunderstorms" },
            { day: "Saturday", temperature: "29°C", description: "Sunny" },
            { day: "Sunday", temperature: "31°C", description: "Hot" }
        ],
        peshawar: [
            { day: "Monday", temperature: "32°C", description: "Sunny" },
            { day: "Tuesday", temperature: "33°C", description: "Partly Cloudy" },
            { day: "Wednesday", temperature: "31°C", description: "Cloudy" },
            { day: "Thursday", temperature: "30°C", description: "Rainy" },
            { day: "Friday", temperature: "29°C", description: "Thunderstorms" },
            { day: "Saturday", temperature: "32°C", description: "Sunny" },
            { day: "Sunday", temperature: "34°C", description: "Hot" }
        ],
        quetta: [
            { day: "Monday", temperature: "24°C", description: "Sunny" },
            { day: "Tuesday", temperature: "25°C", description: "Partly Cloudy" },
            { day: "Wednesday", temperature: "23°C", description: "Cloudy" },
            { day: "Thursday", temperature: "22°C", description: "Rainy" },
            { day: "Friday", temperature: "21°C", description: "Thunderstorms" },
            { day: "Saturday", temperature: "24°C", description: "Sunny" },
            { day: "Sunday", temperature: "26°C", description: "Hot" }
        ],
        rawalpindi: [
            { day: "Monday", temperature: "28°C", description: "Sunny" },
            { day: "Tuesday", temperature: "29°C", description: "Partly Cloudy" },
            { day: "Wednesday", temperature: "27°C", description: "Cloudy" },
            { day: "Thursday", temperature: "26°C", description: "Rainy" },
            { day: "Friday", temperature: "25°C", description: "Thunderstorms" },
            { day: "Saturday", temperature: "28°C", description: "Sunny" },
            { day: "Sunday", temperature: "30°C", description: "Hot" }
        ],
        faisalabad: [
            { day: "Monday", temperature: "34°C", description: "Hot" },
            { day: "Tuesday", temperature: "35°C", description: "Sunny" },
            { day: "Wednesday", temperature: "33°C", description: "Partly Cloudy" },
            { day: "Thursday", temperature: "32°C", description: "Cloudy" },
            { day: "Friday", temperature: "31°C", description: "Rainy" },
            { day: "Saturday", temperature: "33°C", description: "Thunderstorms" },
            { day: "Sunday", temperature: "35°C", description: "Sunny" }
        ],
        larkana: [
            { day: "Monday", temperature: "37°C", description: "Hot" },
            { day: "Tuesday", temperature: "38°C", description: "Sunny" },
            { day: "Wednesday", temperature: "36°C", description: "Partly Cloudy" },
            { day: "Thursday", temperature: "35°C", description: "Cloudy" },
            { day: "Friday", temperature: "34°C", description: "Rainy" },
            { day: "Saturday", temperature: "36°C", description: "Thunderstorms" },
            { day: "Sunday", temperature: "38°C", description: "Sunny" }
        ]
    };

    if (weatherData[city]) {
        let locationElement = document.getElementById('location');
        let temperatureElement = document.getElementById('temperature');
        let descriptionElement = document.getElementById('description');

        locationElement.innerHTML = `Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
        temperatureElement.innerHTML = weatherData[city].map(data => `<p>${data.day}: ${data.temperature}</p>`).join('');
        descriptionElement.innerHTML = weatherData[city].map(data => `<p>${data.day}: ${data.description}</p>`).join('');
    } else {
        alert('City not found. Please enter a valid city!');
    }
});
