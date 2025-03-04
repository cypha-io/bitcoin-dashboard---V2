import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { login as authenticate } from '../utils/auth.js';
import { useAuth } from '../contexts/AuthContext.js';

function Login({ onClose, setNotification }) {
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const result = await authenticate(email.value, password.value);
    setMessage(result);
    if (result === 'Login successful') {
      login(email.value, password.value);
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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
