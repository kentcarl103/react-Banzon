import React, { useState } from 'react';
import { login } from '../Service/ApiService';
import './LoginForm.css'; // Import your CSS file for styling

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const alertMessage = (val) => {
        alert(`${val}`);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await login({ username, password });
            alertMessage(response.Message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alertMessage(`Login failed: ${error.response.data.Message}`);
            } else {
                alertMessage(`Login failed: ${error.message}`);
            }
        }
    };

    return (
        <form className='input' onSubmit={handleLogin}>
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className='input'>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='Username'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className='input'>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    
                    <div className='submit'>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;