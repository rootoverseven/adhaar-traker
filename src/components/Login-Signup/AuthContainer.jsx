import React from 'react';
import './style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
export default function AuthContainer() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Aadhar Tracker</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path='/' element={<LoginComponent/>} />
            <Route path="/sign-in" element={<LoginComponent/>} />
            <Route path="/sign-up" element={<SignUpComponent/>} />
          </Routes>
        </div>
      </div>
    </div></Router>
  )
}
