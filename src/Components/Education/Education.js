import React from 'react'
import './Education.css'
import Title from '../Title/Title'
import EducationCard from '../EducationCard/EducationCard'

const Education = () => {
    return (
        <div className='educationContainer' >
            <Title title={'Education'} />
            <EducationCard />
            <EducationCard />
        </div>
    )
}

export default Education
