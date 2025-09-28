
async function fetchWeatherData(location) {
    try {
        const key = "3VHSNTX2HAD5JRCZCWJL42ZWJ"
        const searchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
        const response = await fetch(searchURL)
        const data = await response.json()
        return getWeatherData(data)
    } catch(err) {
        console.log(`An error occured while fetching required data from the API -> ${err}`)
    }
}

function getWeatherData(data) {
    const latitude = data.latitude
    const longitude = data.longitude
    const condition = data.days[0].conditions
    const description = data.days[0].description
    const pressure = data.days[0].pressure
    const humidity = data.days[0].humidity
    const visibility = data.days[0].visibility
    return { latitude, longitude, condition, description, pressure, humidity, visibility }
}

fetchWeatherData("london").then(data => console.log(data))
