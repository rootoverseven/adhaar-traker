import React from 'react'
import { useState } from "react";
import { loginUser } from '../../api';
import { useNavigate } from 'react-router-dom';


export default function LoginComponent() {
    const navigate = useNavigate();

    let [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })
    async function submit(e) {
        e.preventDefault()
        try {
            let res = await loginUser(userDetails)
            console.log(res)
            localStorage.setItem('app_access_token', res.data.token)
            navigate('/')

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
        <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="email" className="form-control" placeholder="Enter email" name='username' value={userDetails.username} onChange={(e)=>changeHandle(e)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password' value={userDetails.password} onChange={(e)=>changeHandle(e)}/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">&nbsp; Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-dark btn-block" onClick={(e)=>{submit(e)}}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    )
}
