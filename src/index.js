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