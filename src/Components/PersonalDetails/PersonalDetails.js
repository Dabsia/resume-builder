import React from 'react'
import './PersonalDetails.css'

const PersonalDetails = () => {
    return (
        <form className='PersonalDetails' >
            <div className='detailsINputContainer' >
                <input placeholder='title' className='personalDetailsInput' />
                <input placeholder='First Name' className='personalDetailsInput' />
            </div>
            <div className='detailsINputContainer' >
                <input placeholder='Last Name' className='personalDetailsInput' />
                <input placeholder='Email' className='personalDetailsInput' />
            </div>
            <div className='detailsINputContainer' >
                <input placeholder='Country' className='personalDetailsInput' />
                <input placeholder='City' className='personalDetailsInput' />
            </div>
        </form>
    )
}

export default PersonalDetails
