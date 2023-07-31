import React from 'react'
import './Home.css'
import UserInfo from '../../Components/UserInfo/UserInfo'

const Home = () => {
  return (
    <div className='homeContainer' >
      <div className='userInfoBox' >
        <UserInfo />
      </div>
    </div>
  )
}

export default Home
