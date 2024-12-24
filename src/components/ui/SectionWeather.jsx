import CardWeather from "../common/CardWeather";
import Data from "../../mocks/Response.json";

export default function SectionWeather() {
  const weatherData = {
    name: Data.location.name,
    country: Data.location.country,
    last_updated: Data.current.last_updated.split(' ')[1],
    temp_c: Data.current.temp_c,
    temp_f: Data.current.temp_f,
    condition: Data.current.condition,
    humidity: Data.current.humidity,
    wind_kph: Data.current.wind_kph,
    wind_dir: Data.current.wind_dir,
  };

  return(
    <section className="flex flex-col flex-grow justify-center items-center">
      <form action="" className="flex flex-col gap-2">
        <h2 className="text-lg w-full">I want to know the weather in:</h2>
        <div className="w-full">
          <input type="text" placeholder="City" className="p-2 bg-secondary/30 rounded-l-md outline-none text-text w-3/4 border border-accent/70" />
          <button className="1/4 bg-accent/70 px-3 py-2 rounded-r-md border border-transparent">Search</button>
        </div>
      </form>
      <CardWeather {...weatherData}  />
    </section>
  )
}
