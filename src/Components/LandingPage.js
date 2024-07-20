import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'; // Import your CSS file for styling

function LandingPage() {
    return (
        <div className="header">
            <div className="navbar-logo">
                <h1>TuneHub</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/Signin">Sign In</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPage;