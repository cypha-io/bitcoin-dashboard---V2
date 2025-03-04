import React, { useState } from 'react';
import './Auth.css';
import { signUp } from '../utils/auth.js';

function CreateAccount({ onClose, setNotification }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = event.target.elements;
    const result = await signUp(name.value, email.value);
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
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
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
