import React from 'react'
import Title from '../Title/Title'
import './Internships.css'
import InternshipCard from '../InternshipCard/InternshipCard'

const Internships = () => {
    return (
        <div className='internshipContainer' >
            <Title title={'Internships'} />
            <InternshipCard />
            <InternshipCard />
        </div>
    )
}

export default Internships
