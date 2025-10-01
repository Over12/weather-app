import PropTypes from 'prop-types'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { motion } from 'motion/react'

export default function ThemeButton({ toggleTheme, theme }) {
  return (
    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} whileTap={{ rotate: -90 }} onClick={toggleTheme} className='fixed bg-primary/20 border-2 border-primary rounded-full p-2 bottom-5 right-5'>
      {theme === 'dark' ? <IconMoon className='size-7' /> : <IconSun className='size-7' />}
    </motion.button>
  )
};

ThemeButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}