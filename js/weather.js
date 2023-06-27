const apikey = 'lg7iIQKwzyiD7ZBHhQOcQGGtrMGaACh2'
const baseURL = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => 
    `${baseURL}locations/v1/cities/search?apikey=${apikey}&q=${cityName}`

const getWeatherUrl = cityKey => 
    `${baseURL}currentconditions/v1/${cityKey}?apikey=${apikey}&language=pt-BR`


const fetchDataAPI = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok){
            throw new Error('Não foi possível obter os dados')
        }
        return response.json()

    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}

const getCityData = cityName => fetchDataAPI(getCityUrl(cityName))
const getCityWeather = cityKey => fetchDataAPI(getWeatherUrl(cityKey))




