import "./portfolio.css"
import { projects } from "../../assets/data"
import Card from "../../components/card/Card"
import { Link } from "react-router-dom"
import IMG from "../../assets/portfolio.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recetn Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio