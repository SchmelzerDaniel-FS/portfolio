import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT" text="Send me a message and we can chat!" />
      <Form/>
      <Footer />
    </div>
  )
}

export default contact