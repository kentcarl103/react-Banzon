import React from 'react'

//For Sign up ni siya
function Signup() {
    return (<><h1>Signup</h1>
        <div class="uInformation">
            <div class="FName">
                <h4>Username</h4>
                <input type="text" />
            </div>
            <div class="LName">
                <h4>Password</h4>
                <input type="password" />
            </div>
        </div>
        <button type="submit" class="signUpButton">Sign up</button>
    </>
    )
}
export default Signup