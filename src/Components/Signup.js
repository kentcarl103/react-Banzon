import React, { useState } from 'react';
import { register } from '../Service/ApiService';
import './Signup.css'; // Import your CSS file for styling

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            if (response && response.includes('Username already exists')) {
                setErrorMessage('Account creation failed: Username already exists. Please choose another username.');
            } else if (response && response.includes('Registration Successful')) {
                alert('Registration Successful');
                setErrorMessage('');
            } else {
                setErrorMessage('Unknown error: Please try again later.');
                console.error('Unexpected response:', response); // Log unexpected responses for debugging
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                setErrorMessage(`Account creation failed: ${error.response.data.Message}`);
            } else {
                setErrorMessage(`Account creation failed: ${error.message}`);
            }
            console.error('Error creating account:', error); // Log detailed error for debugging
        }
    };

    return (
        <form className='input' onSubmit={handleSubmit}>
            <div className="container">
                <div className="header">
                    <div className="text">Sign up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className='input'>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='Username'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input'>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='submit'>
                        <button type="submit">Sign up</button>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </form>
    );
};

export default Signup;