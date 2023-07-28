import React from 'react'

const EducationCard = () => {
    return (
        <div>
            <div className='jobHeadingContainer schoolContainer' >
                <span className='companyInfo' >Benson Idahosa University</span>
                <span className='location' >Benin, Nigeria</span>
            </div>
            <div className='date' >
                <span className='workingDate' >October 2018</span> - <span className='workingDate' >September 2022</span>
            </div>
            <p className='jobHistoryList' >Graduated with first class honors Computer science (BSc)</p>
        </div>
    )
}

export default EducationCard
