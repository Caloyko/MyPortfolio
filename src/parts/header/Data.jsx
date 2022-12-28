import CV from "../../assets/CV.pdf"

const Data = () => {
  return (
      <div className='header__data'>
          <h1 className='header__title'>I am <span>Pauline Lubet</span></h1>
          <h5 className='header__subtitle'>FullStack Developer</h5>
          <p className='header__description'>Actually Student in 4th year at Epita. Bla Bla Bla</p>
          <div className="header__btn">
            <a href='#contact' className='btn lg'>Contact me</a>
            <a href={CV} download className='btn'>Download CV</a>
          </div>    
        
    </div>
  )
}

export default Data