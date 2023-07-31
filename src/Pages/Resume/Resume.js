import React from 'react'
import Body from '../../Components/Body/Body'

const Resume = ({ downloadPDF, loading }) => {
    return (
        <div className='resumeContainer' >
            <Body />
            <button onClick={downloadPDF} >
                {loading ? 'Downloading...' : 'Download'}
            </button>
        </div>

    )
}

export default Resume
