import React from 'react'
import "./portfolio.css"
import airQuality from '../../assets/airQuality.png'

const data = [
  {
    id: 1,
    image: airQuality,
    title: 'Air Quality',
    github: 'https://github.com/arasaa/air_quality',
    demo: ''
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio-items">
          <div className="portfolio-item-img">
            <img src={airQuality} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio-item-cta">
          <a href={github} target='blank' className='btn'>Github</a>
          <a href={demo} className="btn btn-primary">Live Demo</a>
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