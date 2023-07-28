import React from 'react'
import './Links.css'
import Title from '../Title/Title'

const Links = () => {
    return (
        <div className='linksContainer' >
            <Title title={'Links'} />
            <ul className='linksUl' >
                <li className='linkItem' >LinkedIn</li>
                <li className='linkItem' >Twiter</li>
                <li className='linkItem' >Github</li>
                <li className='linkItem' >Website</li>
            </ul>
        </div>
    )
}

export default Links
