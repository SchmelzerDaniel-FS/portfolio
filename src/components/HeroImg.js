import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/intro-img.jpeg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
          <img className='intro-img' src={IntroImg} alt='Office Background'/>
      </div>
      <div className='content'>
          <p>Hello! I am Daniel Schmelzer!</p>
          <h1>Web Developer</h1>
        <div>
          <Link to='/projects' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg