import { useState } from 'react'
import { getWeatherData } from '../lib/weatherData'

export default function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const city = e.target.city.value
    if (!city) return
    await fetchWeather(city)
    e.target.city.value = ''
  }

  const fetchWeather = async (city) => {
    try {
      setLoading(true)
      const data = await getWeatherData({ city })
      setWeather(data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return { weather, loading, error, handleSubmit }
}
