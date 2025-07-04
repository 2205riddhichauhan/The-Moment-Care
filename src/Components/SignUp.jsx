import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ setIsAuthenticated, setSelectedTab, setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setUserData({ email, password });  // Save credentials
      setMessage('Signup Successful! Redirecting to login...');
      setTimeout(() => {
        setSelectedTab('Login');
      }, 1000);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <p className="login">
            Already have an account?{' '}
            <a href="#" onClick={() => setSelectedTab('Login')}>Login</a>
          </p>
        </form>
        {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>}
      </div>
    </div>
  );
};

export default SignUp;
