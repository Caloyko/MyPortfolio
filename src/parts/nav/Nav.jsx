import "./nav.css"
import { useState } from 'react'
import { GoHome } from "react-icons/go"
import {FaRegUser} from "react-icons/fa"
import {GrContact} from "react-icons/gr"
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#contact' ? 'active' : ''}><BiBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav