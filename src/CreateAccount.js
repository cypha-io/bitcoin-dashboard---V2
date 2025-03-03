import React from 'react';

function CreateAccount() {
    return (
        <div className="CreateAccount">
            <h2>Create Account</h2>
            <form action="/create-account" method="post">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
}

export default CreateAccount;
