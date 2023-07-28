import React from 'react'
import Title from '../Title/Title'
import './Profile.css'

const Profile = () => {
    return (
        <div>
            <Title title={'Profile'} />
            <div className='profileTextContainer' >
                <p className='profileText' >Highly passionate and devoted frontend developer with 2+ years of experience, specializing in React Js, Typescript, Next Js
                    and other development tools. Possess strong expertise in website and web applications, optimizing web application performance for better ser experience.
                    Collaborative team player with continous learning and growth.
                </p>
            </div>
        </div>
    )
}

export default Profile
