import React from 'react'
import './appointment.css'

const Appointment = () => {
  return (
    <div className='appointment'>
        <div className="appointment__track">
            <div className='header'>
                Track Your Appointment
            </div>
            <button>
                Track Agent
            </button>
        </div>
        <div className='appointment__book'>
            <div>
                Do you want to book an Appointment?
            </div>
            <button>
                Book now
            </button>
        </div>
        <div className="appointment__table">
            <div className="header">
                Appointment Table
            </div>
        </div>
    </div>
  )
}

export default Appointment