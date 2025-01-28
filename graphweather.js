const apiKey = "d5922abe793e1834340d79856273d53d"; 


function fetchForecast() {
    const city = "London"; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const processedData = processForecastData(data);
            createForecastChart(processedData);
        })
        .catch(error => console.error("Error fetching forecast data:", error));
}


function processForecastData(data) {
    const uniqueDates = {}; 

  
    data.list.forEach(entry => {
        const date = entry.dt_txt.split(" ")[0];

        if (!uniqueDates[date]) {
            uniqueDates[date] = {
                time: entry.dt_txt,
                temp: entry.main.temp,
                humidity: entry.main.humidity
            };
        }
    });

 
    return Object.values(uniqueDates);
}


function createForecastChart(data) {
    const ctx = document.getElementById('forecastChart').getContext('2d');

 


    window.forecastChart = new Chart(ctx, {
        type: 'doughnut', 
        data: {
            labels: data.map(item => item.time), 
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: data.map(item => item.temp), 
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', 
                    borderColor: 'rgb(192, 118, 75)', 
                    borderWidth: 1,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5 
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            barPercentage: 0.5, 
            categoryPercentage: 0.5 
        }
    });
}


document.getElementById("fetchForecast").addEventListener("click", fetchForecast);
