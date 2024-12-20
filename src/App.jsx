import { useState } from "react"
import Navbar from "./components/ui/Navbar"
import CardWeather from "./components/ui/CardWeather"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen h-full w-full ${darkMode ? 'dark' : ''} bg-background text-text transition-colors`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <CardWeather />
    </div>
  )
}

export default App
