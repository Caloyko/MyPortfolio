import { Link } from "react-router-dom"
import "./header.css"
import "./Socials"
import IMGME from "../../assets/portrait-header.jpg"
import Socials from "./Socials"
import Data from "./Data"

const Header = () => {
  return (
    <header className="header section" id="header">
      <div className="header__container container grid">
        <div className="header__content grid">
          <Socials />
            <div className="main__header-image"></div>
          <Data/>
          
          </div>
        <div className="main__header-right">
          <div className="main__header-font"></div>
            <div className="main__header-image">
              <img src={IMGME} alt="header image"/>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header