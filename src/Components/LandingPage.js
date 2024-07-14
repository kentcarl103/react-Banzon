import React from "react";
import { Link } from "react-router-dom";

//For landing page ni siya
function LandingPage() {
    return (
        <div className="NavBar">
            <div className="navbar-logo"><h1>TuneHub</h1></div>
            <ul>
                <li><Link to="/Signin">Sign In</Link></li>
                <li><Link to="/Signup">Sign Up</Link></li>
            </ul>

        </div>
    )
}

export default LandingPage