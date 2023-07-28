import React from 'react'
import Title from '../Title/Title'
import './EmploymentHistory.css'
import JobHistoryCard from '../JobHistoryCard/JobHistoryCard'

const EmploymentHistory = () => {
    return (
        <div className='emplomentHistoryContainer' >
            <Title title={'Employment history'} />
            <JobHistoryCard />
            <JobHistoryCard />
        </div>
    )
}

export default EmploymentHistory
