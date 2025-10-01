import { AnimatePresence, motion } from 'motion/react'
import PropTypes from 'prop-types';

export default function WeatherForm({ loading, error, handleSubmit }) {
  return (
    <>
      <form className='mt-3 flex gap-2' onSubmit={handleSubmit}>
        <input type='text' name='city' id='city' placeholder='Enter city name' required className='border border-primary px-3 py-2 rounded-md bg-transparent focus:outline-none' />
        <button type='submit' className='bg-primary rounded-md px-3 w-32 focus:outline-none'>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      <AnimatePresence>
        {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='text-primary font-semibold'>{error}</motion.p>}
      </AnimatePresence>
    </>
  )
}

WeatherForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
