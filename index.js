/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")

const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

const themeToggle = document.getElementById("theme-toggle")

function updateThemeToggle(theme) {
    themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    )
}



convertBtn.addEventListener("click", function() {

    const value = Number(input.value)


    // Length
    const metersToFeet = value * 3.28084
    const feetToMeters = value / 3.28084


    lengthResult.textContent =
        `${value} meters = ${metersToFeet.toFixed(3)} feet | 
        ${value} feet = ${feetToMeters.toFixed(3)} meters`



    // Volume
    const litersToGallons = value * 0.264172
    const gallonsToLiters = value / 0.264172


    volumeResult.textContent =
        `${value} liters = ${litersToGallons.toFixed(3)} gallons | 
        ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`



    // Mass
    const kilosToPounds = value * 2.20462
    const poundsToKilos = value / 2.20462


    massResult.textContent =
        `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | 
        ${value} pounds = ${poundsToKilos.toFixed(3)} kilos`

})





const savedTheme = localStorage.getItem("theme")

const initialTheme = savedTheme === "dark" ? "dark" : "light"

document.documentElement.dataset.theme = initialTheme
updateThemeToggle(initialTheme)

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light"
    const theme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.dataset.theme = theme

    localStorage.setItem("theme", theme)
    updateThemeToggle(theme)

})