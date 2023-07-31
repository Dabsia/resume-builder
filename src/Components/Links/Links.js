import React from 'react'
import './Links.css'
import Title from '../Title/Title'

const Links = () => {
    return (
        <div className='linksContainer' >
            <Title title={'Links'} />
            <ul className='linksUl' >
                <li className='https://linkedin.com/in/dabo-johnson-5b39a8211' >https://linkedin.com/in/dabo-johnson-5b39a8211</li>
                <li className='https://twitter.com/johnson_dabo' >https://twitter.com/johnson_dabo</li>
                <li className='https://github.com/dabsia' >https://github.com/dabsia</li>
                <li className='https://dabojohnson.netlify.app' >https://dabojohnson.netlify.app </li>
            </ul>
        </div>
    )
}

export default Links
