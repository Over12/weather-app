import { AnimatePresence, motion } from 'motion/react'
import WeatherForm from '../common/WeatherForm'
import useWeather from '../../hooks/useWeather'
import WeatherCard from './WeatherCard'

export default function Home() {
  const { weather, loading, error, handleSubmit } = useWeather()

  return (
    <motion.div layout className='flex flex-col items-center justify-center min-h-svh p-5 sm:p-10 gap-2'>
      <AnimatePresence mode='wait'>
        {!weather && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0, height: 0 }}>
            <h1 className='text-3xl sm:text-5xl font-bold text-center text-primary'>Your Weather, Simplified</h1>
            <p  className='text-base sm:text-lg text-center'>Your forecast, right when you need it.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <WeatherForm loading={loading} error={error} handleSubmit={handleSubmit} />

      {weather && <WeatherCard weather={weather} />}
    </motion.div>
  )
}
