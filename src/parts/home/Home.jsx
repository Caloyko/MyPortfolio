import Palette  from "../../components/palette/Palette"
import Header  from '../header/Header'
import Nav  from '../nav/Nav'
import About  from '../about/About'
import Portfolio  from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'


const Home = () => {
  return ( 
    <div>
      <Header/>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </div>
    
  )
}

export default Home