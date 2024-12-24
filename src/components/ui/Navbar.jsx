// filepath: /c:/Users/avalo/dev/weather-app/src/components/ui/Navbar.jsx
import PropTypes from "prop-types";
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex relative justify-center items-center bg-secondary/50 border-4 border-t-0 border-secondary rounded-b-xl px-10 py-5 mx-5">
      <h1 className="text-center text-3xl font-bold">Weatherly</h1>
      <button className="right-5 absolute p-2 rounded-full border-2 border-black dark:border-yellow-500 bg-background/30" onClick={toggleDarkMode}>
        {darkMode ? (
          <img src={Sun} alt="Sun Icon" className="size-7" />
        ) : (
          <img src={Moon} alt="Moon Icon" className="size-7" />
        )}
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};