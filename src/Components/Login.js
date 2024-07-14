import React from 'react'
//For login ni siya
function Login() {
    return (<><h1>Login</h1>
        <div class="uName">
            <h4>UserName </h4>
            <input type="text" />
        </div>
        <div class="uPass">
            <h4>Password</h4>
            <input type="password" />
        </div>
        <button type="submit" class="signInButton">Sign in</button>
    </>
    )
}
export default Login