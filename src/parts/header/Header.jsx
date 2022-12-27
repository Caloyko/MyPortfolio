import { Link } from "react-router-dom"
import "./header.css"
import IMGME from "../../assets/portrait-header.jpg"

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <h4>FullStack developer</h4>
        <h1>I am <span>Pauline Lubet</span></h1>
        <p>Actually Student in 4th year at Epita. Bla Bla Bla</p>
        <a href='#contact' className='btn lg'>Contact me</a>
      </div>
      <div className="main__header-right">
        <div className="main__header-font">
          <div className="main__header-image">
            <img src={IMGME} alt="header image"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header