import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import { IconCloud, IconDroplets, IconTemperature, IconWind } from '@tabler/icons-react'
import InformationItem from '../common/InformationItem'

export default function WeatherCard({ weather }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9, height: 0 }} animate={{ opacity: 1, scale: 1, height: 'fit-content', animation: 'ease-in-out' }} className='w-full sm:w-1/3 h-fit border-2 border-accent rounded-md overflow-hidden'>
      <div className='flex justify-between p-3 sm:p-5 bg-gradient-to-r from-accent/30 to-secondary/30'>
        <div className='flex flex-col'>
          <motion.h2 key={weather.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} layout className='text-lg sm:text-xl font-bold'>{weather.name}</motion.h2>
          <motion.p key={weather.country} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-sm sm:text-base opacity-70'>{weather.country}</motion.p>
          <div className='flex items-center gap-2 mt-2 sm:mt-0'>
            <motion.img key={weather.condition.icon} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} src={weather.condition.icon} alt='Icon representing weather condition' className='size-12 sm:auto' />
            <motion.p key={weather.condition.text} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-sm sm:text-base'>{weather.condition.text}</motion.p>
          </div>
        </div>
        <div className='text-right'>
          <motion.p key={weather.temp_c} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-3xl sm:text-5xl font-bold'>{weather.temp_c}°C</motion.p>
          <motion.p key={weather.temp_f} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-sm sm:text-base opacity-70'>{weather.temp_f}°F</motion.p>
        </div>
      </div>
      <div className='grid grid-cols-2 p-3 sm:p-5'>
        <div className='flex flex-col gap-3 sm:gap-5'>
          <InformationItem icon={IconTemperature} label="Feels like" value={`${weather.temp_c}°C / ${weather.temp_f}°F`} />
          <InformationItem icon={IconWind} label="Wind" value={`${weather.wind_kph} km/h ${weather.wind_dir}`} />
        </div>
        <div className='flex flex-col gap-5'>
          <InformationItem icon={IconDroplets} label="Humidity" value={`${weather.humidity}%`} />
          <InformationItem icon={IconCloud} label="Last updated" value={weather.last_updated} />
        </div>
      </div>
    </motion.div>
  )
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    last_updated: PropTypes.string.isRequired,
    temp_c: PropTypes.number.isRequired,
    temp_f: PropTypes.number.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      code: PropTypes.number.isRequired,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind_kph: PropTypes.number.isRequired,
    wind_dir: PropTypes.string.isRequired,
  }).isRequired,
}
