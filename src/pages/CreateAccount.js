import React from 'react';
import './Auth.css';

function CreateAccount() {
    return (
        <div className="Auth">
            <h2>Create Account</h2>
            <form action="/create-account" method="post">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default CreateAccount;
