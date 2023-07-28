import React from 'react'
import './RightContainer.css'
import Profile from '../Profile/Profile'
import EmploymentHistory from '../EmploymentHistory/EmploymentHistory'
import Education from '../Education/Education'
import Internships from '../Internships/Internships'

const RightContainer = () => {
    return (
        <div className='rightContainer' >
            <Profile />
            <EmploymentHistory />
            <Education />
            <Internships />
        </div>
    )
}

export default RightContainer
