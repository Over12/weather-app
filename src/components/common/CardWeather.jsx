import PropTypes from "prop-types"
import TemperatureIcon from "../../assets/temperature.svg"
import WindIcon from "../../assets/wind.svg"
import DropletIcon from "../../assets/droplet.svg"
import CloudIcon from "../../assets/cloud.svg"
import { CONDITIONS } from "../../constants/CONDITIONS"

export default function CardWeather({ name, country, last_updated, temp_c, temp_f, condition, humidity, wind_kph, wind_dir }) {
  const bgColor = CONDITIONS.COLORS[condition.text.replace(" ", "")] || "from-primary to-secondary"

  return(
    <div className="m-5 border-4 border-accent/70 rounded-md w-full sm:w-4/6 md:w-3/6 lg:w-5/12 xl:w-1/3">
      <div className={`p-5 flex justify-between text-white bg-gradient-to-br ${bgColor}`}>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-base opacity-80">{country}</p>
          <div className="flex items-center gap-1">
            <img src={condition.icon} alt={condition.text} />
            <p className="text-lg">{condition.text}</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-5xl font-bold">{temp_c}°C</h2>
          <p className="text-lg">{temp_f}°F</p>
        </div>
      </div>
      <div className="p-5 flex justify-between gap-10">
        <div className="flex flex-col w-1/2 gap-5">
          <div className="flex items-center gap-2">
            <img src={TemperatureIcon} alt="Temperature Icon" className="size-8" />
            <div>
              <p className="opacity-90 text-sm">Feels like</p>
              <p className="font-bold">{temp_c}°C / {temp_f}°F</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={WindIcon} alt="Wind Icon" className="size-8" />
            <div>
              <p className="opacity-90 text-sm">Wind</p>
              <p className="font-bold">{wind_kph} km/h {wind_dir}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          <div className="flex items-center gap-2">
            <img src={DropletIcon} alt="Droplet Icon" className="size-8" />
            <div>
              <p className="opacity-90 text-sm">Humidity</p>
              <p className="font-bold">{humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={CloudIcon} alt="Cloud Icon" className="size-8" />
            <div>
              <p className="opacity-90 text-sm">Last updated</p>
              <p className="font-bold">{last_updated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CardWeather.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  last_updated: PropTypes.string.isRequired,
  temp_c: PropTypes.number.isRequired,
  temp_f: PropTypes.number.isRequired,
  condition: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
  humidity: PropTypes.number.isRequired,
  wind_kph: PropTypes.number.isRequired,
  wind_dir: PropTypes.string.isRequired
}
