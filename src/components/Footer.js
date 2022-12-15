import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem'}}/>
                        <p>Guttenberg Iowa</p>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem'}}/>
                        563-880-5305
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem'}}/>
                        dschmelzer8716@outlook.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>You have reached the end.</h4>
                <p>Please feel free to reach out to me with any questions or concerns! Message me if you would like a Resume or access to more Repos!</p>
            </div>
        </div>
    </div>
  )
}

export default Footer