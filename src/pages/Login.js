import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { login as authenticate } from '../utils/auth';
import { useAuth } from '../contexts/AuthContext';

function Login({ onClose, setNotification }) {
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements;
        const result = authenticate(username.value, password.value);
        setMessage(result);
        if (result === 'Login successful') {
            login();
            onClose();
            setNotification('Login successful');
            navigate('/user-dashboard');
        } else {
            setNotification('Login unsuccessful');
        }
    };

    return (
        <div className="Auth">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
