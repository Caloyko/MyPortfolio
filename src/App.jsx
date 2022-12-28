import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './parts/home/Home'
import NotFound from './parts/notFound/NotFound'
import Footer from './parts/footer/Footer'
import Palette from './components/palette/Palette'

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="palette" element={<Palette/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App