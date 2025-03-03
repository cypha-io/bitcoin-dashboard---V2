import React from 'react';

function Login() {
    return (
        <div className="Login">
            <h2>Login</h2>
            <form action="/login" method="post">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/create-account">Create one</a></p>
        </div>
    );
}

export default Login;
