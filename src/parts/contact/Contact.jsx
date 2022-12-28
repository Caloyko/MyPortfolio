import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { SiWhatsapp } from "react-icons/si"
import { useRef } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
  const formJs = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dtu7g1m', 'template_7ikfzfi', formJs.current, 'knGpqKuGNnBwy9MUl')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>My Personnal Infos</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pauline.lubet@epita.fr</h5>
            <a href='mailto:pauline.lubet@epita.fr' target="_blank">Send a message</a>
          </article>
                    <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pauline Lubet</h5>
            <a href='https://m.me/Pauline Lubet' target="_blank">Send a message</a>
          </article>
                    <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whats app</h4>
            <h5>+336.66.86.13.88</h5>
            <a href='https://api.whatsapp.com/send?phone+33666861388' target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={formJs} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact