import CardWeather from "../common/CardWeather";
import { getWeatherData } from "../../lib/weatherData";
import { useState } from "react";

export default function SectionWeather() {
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()

    const city = e.target.city.value

    if (!city) {
      setWeatherData({ error: "City is required" })
      return
    }

    try {
      setLoading(true)
      setWeatherData({})
      const data = await getWeatherData({ city })

      setWeatherData(data)
    } catch (error) {
      setWeatherData({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return(
    <section className="flex flex-col flex-grow justify-center items-center px-5 md:px-10">
      <form action="" className="flex flex-col gap-2" onSubmit={handleSearch}>
        <h2 className="text-lg w-full">I want to know the weather in:</h2>
        <div className="w-full flex">
          <input type="text" placeholder="City" className="p-2 bg-secondary/30 rounded-l-md outline-none text-text w-3/4 border border-accent/70" name="city" required />
          <button type="submit" className="1/4 bg-accent/70 px-3 py-2 rounded-r-md border border-transparent" disabled={loading}>Search</button>
        </div>
      </form>
      {loading && <p className="text-accent m-1">Loading...</p>}
      {weatherData.error && <p className="text-accent m-1">{weatherData.error}</p>}
      {weatherData.name && <CardWeather {...weatherData} />}
    </section>
  )
}
