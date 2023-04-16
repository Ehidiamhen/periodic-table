import './App.css'
import PeriodicTable from './PeriodicTable/PeriodicTable'
import { useState } from 'react'
import sun from './assets/sun-high.svg'
import moon from './assets/moon.svg'

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1 className='h1'>THE PERIODIC TABLE OF ELEMENTS</h1>
      <span onClick={() => setDark(!dark)}>
        <img src={dark ? sun : moon} alt="light/dark mode" />
      </span>
      <PeriodicTable />
      <footer>&#169; <a href="https://twitter.com/ehis_eleazar" target="_blank">Ehidiamhen</a> {new Date().getFullYear()}.</footer>
    </div>
  )
}

export default App
