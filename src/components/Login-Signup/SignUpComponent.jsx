import React from 'react'
import { useState } from "react";
import { signUpUser } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function SignUpComponent() {
    const navigate = useNavigate();
    let [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        phone: "",
        profile: "",
        addressline1: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        aadhaarnumber: "",
        dob: ""
    })
    async function submit(e) {
        e.preventDefault()
        try {
            let res = await signUpUser(userDetails)
            navigate('/sign-in')
        } catch (error) {
            console.log(error)
        }
    }
    function changeHandle(e){
        console.log(e.target.value)
        setUserDetails(values => ({...values, [e.target.name]: e.target.value}))
        // userDetails[e.target.name]=e.target.value;
    }
    return (
        <div className="auth-wrapper">
          <div className="auth-inner">
        <form>
            <h3>Sign Up</h3>
            <div className='d-flex'>
                <div className='left-form'>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" name="firstname" value={userDetails.firstname} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Middle name</label>
                        <input type="text" className="form-control" placeholder="Middle name" name="middlename" value={userDetails.middlename} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" name="lastname" value={userDetails.lastname} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={userDetails.email} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Phone No</label>
                        <input type="text" className="form-control" placeholder="Enter phone no" name="phone" value={userDetails.phone} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" value={userDetails.username} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" value={userDetails.password} onChange={(e)=>changeHandle(e)}/>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label>Address Line 1</label>
                        <input type="text" className="form-control" placeholder="Address Line 1" name="addressline1" value={userDetails.addressline1} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" name="city" value={userDetails.city} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" placeholder="State" name="state" value={userDetails.state} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="Country" name="country" value={userDetails.country} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Pin-code</label>
                        <input type="text" className="form-control" placeholder="Pin-code" name="pincode" value={userDetails.pincode} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Aadhar No</label>
                        <input type="text" className="form-control" placeholder="Aadhar No" name="aadhaarnumber" value={userDetails.aadhaarnumber} onChange={(e)=>changeHandle(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control" placeholder="dob" name="dob" value={userDetails.dob} onChange={(e)=>changeHandle(e)}/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-dark btn-block" onClick={(e)=>{submit(e)}}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
        </div>
        </div>
    )
}
