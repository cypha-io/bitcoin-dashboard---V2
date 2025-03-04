import React, { useState } from 'react';
import './Auth.css';
import { signUp } from '../utils/auth';

function CreateAccount({ onClose, setNotification }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements;
        const result = signUp(username.value, password.value);
        setMessage(result);
        if (result === 'User registered successfully') {
            onClose();
            setNotification('Account created successfully');
        } else {
            setNotification('Account creation failed');
        }
    };

    return (
        <div className="page-container">
            <div className="content">
                <div className="Auth">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <button type="submit">Create Account</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
