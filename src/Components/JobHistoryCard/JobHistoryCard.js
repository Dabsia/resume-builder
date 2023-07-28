import React from 'react'
import './JobHistoryCard.css'

const JobHistoryCard = () => {
    return (
        <div className='jobHistoryCardContainer' >
            <div className='jobHeadingContainer' >
                <div>
                    <span className='companyInfo' >Frontend Developer</span> , <span className='companyInfo' >Almond Careers</span>
                </div>
                <p className='location' >Remote</p>

            </div>
            <div className='date' >
                <span className='workingDate' >August 2022</span> - <span className='workingDate' >November 2022</span>
            </div>
            <ul className='jobHistoryListParent' >
                <li className='jobHistoryList' >Part of the development team involved in the building of the application system.</li>
                <li className='jobHistoryList'>Planned website development, converting figma designs into a usable Web application.</li>
                <li className='jobHistoryList'>Built interface for 2 kinds of users, Company User and Candidate User.</li>
                <li className='jobHistoryList'>Implemented a cohesive and responsive approach and strategy, ensuring consistency across
                    all screen sizes.
                </li>
                <li className='jobHistoryList'>Technology used: React js, axios, CSS, Figma, Redux, Github, Google meet</li>
            </ul>
        </div>
    )
}

export default JobHistoryCard
