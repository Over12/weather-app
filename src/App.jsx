import { useState } from "react"
import Navbar from "./components/ui/Navbar"
import SectionWeather from "./components/ui/SectionWeather"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`flex flex-col min-h-screen w-screen ${darkMode ? 'dark' : ''} bg-background text-text transition-colors`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SectionWeather />
    </div>
  )
}

export default App
