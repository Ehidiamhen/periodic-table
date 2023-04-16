import './App.css'
import PeriodicTable from './PeriodicTable/PeriodicTable'
import { useState, useEffect } from 'react'
import sun from './assets/sun-high.svg'
import moon from './assets/moon.svg'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode])

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1 className='h1'>THE PERIODIC TABLE OF ELEMENTS</h1>
      <span className={darkMode ? "light-icon" : "dark-icon"} onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? sun : moon} alt="light/dark mode" />
      </span>
      <PeriodicTable />
      <footer>&#169; <a href="https://twitter.com/ehis_eleazar" target="_blank">Ehidiamhen</a> {new Date().getFullYear()}.</footer>
    </div>
  )
}

export default App
