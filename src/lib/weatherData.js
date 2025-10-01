import { API_DATA } from '../constants/API_DATA'

export async function getWeatherData({ city }) {
  const response = await fetch(`${API_DATA.url}?key=${API_DATA.key}&q=${city}&aqi=no`)
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(data.error.message)
  }

  const weatherData = {
    name: data.location.name,
    country: data.location.country,
    last_updated: data.current.last_updated.split(' ')[1],
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    condition: data.current.condition,
    humidity: data.current.humidity,
    wind_kph: data.current.wind_kph,
    wind_dir: data.current.wind_dir,
  }

  return weatherData
}
