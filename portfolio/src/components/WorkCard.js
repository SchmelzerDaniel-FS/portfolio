import './WorkCardStyles.css'
import React from 'react'
import proj1 from '../assets/informational.png'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
        <img src={props.imgsrc} alt='Informational' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='proj-details'>
            <p>{props.text}</p>
            <div className='proj-btns'>
                <NavLink to={props.view} className='btn'>
                    View
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard