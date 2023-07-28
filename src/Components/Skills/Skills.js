import React from 'react'
import Title from '../Title/Title'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skillsContainer' >
            <Title title={'Skills'} />
            <ul className='linksUl' >
                <li className='linkItem' >React Js</li>
                <li className='linkItem' >Typescript</li>
                <li className='linkItem' >HTML</li>
                <li className='linkItem' >CSS</li>
                <li className='linkItem' >Tailwind CSS</li>
                <li className='linkItem' >Figma</li>
                <li className='linkItem' >Python</li>
                <li className='linkItem' >Next Js</li>
                <li className='linkItem' >SASS</li>
                <li className='linkItem' >GIT</li>
                <li className='linkItem' >Github</li>
                <li className='linkItem' >React Native</li>
                <li className='linkItem' >Material UI</li>
            </ul>
        </div>
    )
}

export default Skills
