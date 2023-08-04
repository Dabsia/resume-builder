import React from 'react'
import './Home.css'
import UserInfo from '../../Components/UserInfo/UserInfo'
import LeftHomeSection from '../../Components/LeftHomeSection/LeftHomeSection'

const Home = () => {
  return (
    <>

      {/**<div className='homeContainer' >
      <div className='userInfoBox' >
        <UserInfo />
        
      </div>
    </div>**/}
      <div className='homeDetailsContainer' >
        <LeftHomeSection />
      </div>

    </>
  )
}

export default Home
