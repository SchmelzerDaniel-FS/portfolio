import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const about = () => {
  return (
    <div>
      <NavBar />
        <HeroImg2 heading="ABOUT" text="A brief hello!"/>
        <AboutContent/>
      <Footer />
    </div>
  )
}

export default about