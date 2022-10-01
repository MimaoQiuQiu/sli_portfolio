import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Fullstack Camping Website',
    demo: 'https://secret-chamber-71853.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lyriks Music App',
    demo: 'https://music.viewcub.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Gym Website with Reactjs',
    demo: 'http://train.eduversy.online/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Modern Design Bank Website',
    demo: 'https://hoobank.viewcub.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Online Education Website',
    demo: 'https://www.eduversy.online/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Youtube-like Online Video App',
    demo: 'https://viewcub.com/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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