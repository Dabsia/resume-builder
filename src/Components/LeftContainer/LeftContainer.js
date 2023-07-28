import React from 'react'
import './LeftContainer.css'
import Details from '../Details/Details'
import Links from '../Links/Links'
import Skills from '../Skills/Skills'
import Languages from '../Languages/Languages'

const LeftContainer = () => {
    return (
        <div className='leftContainer' >
            <Details />
            <Links />
            <Skills />
            <Languages />
        </div>
    )
}

export default LeftContainer
