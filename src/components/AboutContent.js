import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.webp'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who I am.</h1>
            <p>
                I am Daniel Schmelzer and I am a Web App Developer. With a focus in React.js and simple backend frameworks I have been honing my skills at Full Sail University to take you and your company to the next level.
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='default img' />
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt='default img' />
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutContent