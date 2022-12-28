import "./footer.css"
import { SiInstagram } from "react-icons/si"
import { CiLinkedin } from "react-icons/ci"
import { FiFacebook } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="footer__part">
      <a href='#' className='footer__title'>Pauline Lubet</a>
      <ul className='permalinks'>
        <li> <a href='#'>HomePage</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experiences'>Experiences</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#testimonials'>Testimonials</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/"><FiFacebook/></a>
        <a href="https://www.instagram.com/oyko_art"><SiInstagram/></a>
        <a href="https://www.linkedin.com/in/pauline-lubet/"><CiLinkedin/></a>
      </div>
        <small>&copy; Pauline Lubet</small>
    </footer>
  )
}

export default Footer