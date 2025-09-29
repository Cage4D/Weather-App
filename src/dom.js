
const domElements = (function() {
    const  input = document.querySelector("#searchBar")
    const location = document.querySelector(".info__location-name")
    const temperature = document.querySelector(".info__temperature")
    const condition = document.querySelector(".info__condition")
    const description = document.querySelector(".info__description")
    const latitude = document.querySelector("#lat")
    const longitude = document.querySelector("#long")
    const pressure = document.querySelector("#prez")
    const humidity = document.querySelector("#humid")

    return { input, location, temperature, condition, description, latitude, longitude, pressure, humidity }
})()

export default domElements
