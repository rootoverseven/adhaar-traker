import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import {  Routes, Route, Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";
import Appointment from "../Appointment/Appointment";
import Home from "../Home/Home";
import MapTracker from "../Tracker/MapTracker";
export default function AuthContainer() {
  const location = useLocation();
  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Aadhar Tracker
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/track" element={<MapTracker />} />
        </Routes>
        {location.pathname.includes("sign") && (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/sign-in" element={<LoginComponent />} />
                <Route path="/sign-up" element={<SignUpComponent />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
  );
}
