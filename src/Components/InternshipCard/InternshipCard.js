import React from 'react'

const InternshipCard = () => {
    return (
        <div className='cardHolder' >
            <div className='jobHeadingContainer' >
                <div>
                    <span className='companyInfo' >Frontend Developer</span> , <span className='companyInfo' >Cinfores Limited</span>
                </div>
                <p className='location' >Port Harcourt</p>

            </div>
            <div className='date' >
                <span className='workingDate' >Mar 2021</span> - <span className='workingDate' >October 2021</span>
            </div>
        </div>
    )
}

export default InternshipCard
