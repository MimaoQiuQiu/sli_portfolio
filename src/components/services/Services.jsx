import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Knowledge = () => {
  return (
    <section id='services'>
      <h5>What I use</h5>
      <h2>Languages and Frameworks</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Programming</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>C/C++</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Haskell</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML, CSS, JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Django</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Node.js</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        
      </div>
    </section>
  )
}

export default Knowledge