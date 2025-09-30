import "../styles/modern-normalize.css"
import "../styles/styles.css"
import "../styles/components/header.css"
import "../styles/components/info.css"
import "../styles/components/prop.css"
import "../styles/utils.css"
import weatherData from "./weather.js"
import Dom from "./dom.js"
import cloudy from "../img/cloudy.jpg";
import sunny from "../img/sunny.jpg";
import rain from "../img/rain.jpg";

async function handleInput(e) {
    if (!e.target.value.trim()) return;
    const data = await weatherData(e.target.value)
    try {
        const conditionData = updateDOM(data)
        updateInfoClass(Dom, conditionData)
        updatePropClass(Dom, conditionData)
        changeBackgroundImg(Dom.backgroundImg, conditionData)
    } catch (error) {
        alert("Enter in a valid City, State or Country")
    }
}

function checkWeatherCondition(condition, temp) {
    let weatherCondition;
    if (condition === 'Rain, Partially cloudy') {
        weatherCondition = "Rainy"
    } else if (condition === 'Partially cloudy') {
        weatherCondition = cloudyOrSunny(temp)
    }
    return weatherCondition;
}

function cloudyOrSunny(temp) {
    const cel = convertFarenheitToCelsius(temp)
    return cel > 23 ? "Sunny" : "Cloudy"
}

function convertFarenheitToCelsius(temp) {
    const celsius = Math.floor((5 * (parseInt(temp) - 32)) / 9)
    return celsius
}

function description(text) {
    if (text === "Sunny") {
        return "Mostly sunny throughout the day with clear skies and warm temperatures."
    } else if ( text === "Rainy") {
        return "Cloudy throughout the day with periods of rain and possible thunderstorms"
    }
}

function updateDOM(data) {
    const conditionLabel = checkWeatherCondition(data.condition, data.temp);
    Dom.location.textContent = Dom.input.value
    Dom.temperature.textContent = `${convertFarenheitToCelsius(data.temp)}°`
    Dom.condition.textContent = conditionLabel
    Dom.description.textContent = Dom.condition.textContent === "Cloudy" ? data.description : description(conditionLabel)
    Dom.pressure.textContent = `${data.pressure}mb`
    Dom.humidity.textContent = `${data.humidity}%`
    Dom.latitude.textContent = `${data.latitude}°`
    Dom.longitude.textContent = `${data.longitude}°`
    return conditionLabel
}