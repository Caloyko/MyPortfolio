import React from 'react'
import Palette from './components/palette/Palette'
import Header  from './parts/header/Header'
import Nav  from './parts/nav/Nav'
import About  from './parts/about/About'
import Portfolio  from './parts/portfolio/Portfolio'
import Contact from './parts/contact/Contact'
import Footer from './parts/footer/Footer'


const App = () => {
  return (
    <div>
      <Palette />
      App
      <Header/>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App