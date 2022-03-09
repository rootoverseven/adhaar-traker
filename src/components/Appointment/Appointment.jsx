import React from 'react'
import './appointment.css'
import { useNavigate } from 'react-router-dom';


const Appointment = () => {
    const navigate = useNavigate();

  return (
    <div className='appointment'>
        <div className="appointment__track">
            <div className='header'>
                Track Your Appointment
            </div>
            <button onClick={()=>{ navigate("/track")}}>
                Track Agent
            </button>
        </div>
        <div className='appointment__book'>
            <div>
                Do you want to book an Appointment?
            </div>
            <button onClick={()=>{ navigate("/slots")}}>
                Book now
            </button>
        </div>
        <div className="appointment__table">
            <div className="header">
                Appointment History
            </div>
        </div>
    </div>
  )
}

export default Appointment