import React from 'react'
import './Details.css'
import Title from '../Title/Title'

const Details = () => {
    return (
        <div className='detailsContainer' >
            <Title title='Details' />

            <div className='headings' >


                <h6 className='detailsHeading' >Address </h6>
                <p className='detailsResponse' >Port Harcourt</p>
                <p className='detailsResponse' >Nigeria</p>

                <h6 className='detailsHeading' >Phone Number </h6>
                <p className='detailsResponse' >07068914478</p>

                <h6 className='detailsHeading' >Email </h6>
                <p className='detailsResponse' >dabojohnson98@gmail.com</p>
            </div>
        </div>
    )
}

export default Details
