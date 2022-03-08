import React from 'react'
import { Link } from 'react-router-dom'
import './home.css';

function Home() {
  return (
    <div className='home' id="home">
      <Link to='/appointment'>
      <div className="card card1">
        Appointment
      </div>
      </Link>
      <Link to='/sign-up'>
      <div className="card card2">
        Profile
      </div>
      </Link>
    </div>
  )
}

export default Home