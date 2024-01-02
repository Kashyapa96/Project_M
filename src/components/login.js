import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import loginImage from '../images/logo.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      console.log('Logged in successfully');
      redirectToDashboard(); // Call function to redirect
    } else {
      setError('Invalid username or password');
    }
  };

  const redirectToDashboard = () => {
    window.location.href = '/realtime';
  };

  return (
    <div className="login-container">
      <div className="image-column">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="form-column">
        <h2 className="welcomeh">Welcome</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to="./realtime">
              <button type="submit" onClick={handleLogin}> Login</button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;