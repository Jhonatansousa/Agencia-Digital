import { useState } from 'react'
import './App.css'

import Topo from './components/Topo'
import Banner from './components/Banner'
import WorkExperiences from './components/WorkExperiences'
import Footer from './components/Footer'

import moon from './assets/moon.png'
import sun from './assets/sun.png'

function App() {

  const dark = 'darkMode'
  const light = 'lightMode'
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }



  return (
    <div className={darkTheme ? dark : light}>
      <Topo>
        <button onClick={toggleTheme}>
          <img src={darkTheme ? sun : moon} alt='' />
        </button>
      </Topo>

      <Banner />
      <WorkExperiences />
      <Footer />
    </div>
  )
}

export default App


