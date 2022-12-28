import { Link } from "react-router-dom"
import "./header.css"
import "./Socials"
import IMGME from "../../assets/portrait-header.jpg"
import Socials from "./Socials"
import Data from "./Data"

const Header = () => {
  return (
    <section>
      <div className="header__section">
        <div className="header-left">
        <Data/>
        </div>
              <div className="header-right">
                  <div className="header-blur"> </div>
                  <div className="header-image">
                      <img src={IMGME} alt="image header"/>
                  </div>
              </div>
      </div>
    </section>
  )
}

export default Header