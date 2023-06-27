const cityForm = document.querySelector('[ data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer= document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timIconContainer = document.querySelector('[data-js="time-icon"]')


const fetchDataCity = async inputValue => {
    const [ { Key, LocalizedName } ] = await getCityData(inputValue)
    const [ { WeatherText, Temperature, IsDayTime, WeatherIcon } ] = await getCityWeather(Key)
    return {LocalizedName, WeatherText, Temperature,IsDayTime, WeatherIcon}
}


const insertWeatherIcon = city => {
    const timeIcon = `<img src="./src/icons/${city.WeatherIcon}.svg">`
    timIconContainer.innerHTML = timeIcon
}

const setBackgroudImgCard = city =>  timeImg.src = city.IsDayTime ? './src/day.svg' : './src/night.svg'

const showCityCard = city => {
    cityNameContainer.textContent = city.LocalizedName
    cityWeatherContainer.textContent = city.WeatherText
    cityTemperatureContainer.textContent = city.Temperature.Metric.Value
    cityCard.classList.remove('d-none')
}


cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    const city = await fetchDataCity(inputValue)

    setBackgroudImgCard(city)
    showCityCard(city)
    insertWeatherIcon(city)

    cityForm.reset()
})