
export default async function fetchWeatherData(location) {
    try {
        const key = "3VHSNTX2HAD5JRCZCWJL42ZWJ"
        const searchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}`
        const response = await fetch(searchURL)
        const data = await response.json()
        return getWeatherData(data)
    } catch(err) {
        console.error(`An error occured while fetching required data from the API -> ${err}`)
        return;
    }
}

function getWeatherData(data) {
    const timezone = data.timezone
    const latitude = data.latitude
    const longitude = data.longitude
    const condition = data.days[0].conditions
    const description = data.days[0].description
    const pressure = data.days[0].pressure
    const humidity = data.days[0].humidity
    const temp = data.days[0].temp
    return { timezone, latitude, longitude, condition, description, pressure, humidity, temp }
}

