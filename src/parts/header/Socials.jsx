import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const Socials = () => {
  return (
      <div className='header__socials'>
          <a href='' className='header__socials-icon' target="_blank">
              <AiFillLinkedin />
          </a>
        <a href='https://github.com/Caloyko' target="_blank"><BsGithub /></a>
        <a href='https://facebook.com' target="_blank"><BsFacebook /></a>


    </div>
  )
}

export default Socials