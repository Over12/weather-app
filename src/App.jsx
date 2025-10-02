import { useState } from 'react'
import ThemeButton from './components/common/ThemeButton'
import Home from './components/ui/Home'
import Footer from './components/ui/Footer'

function App() {
  const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className={`relative bg-background text-text ${theme} transition-colors`}>
      <Home />
      <Footer />
      <ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </main>
  )
}

export default App
