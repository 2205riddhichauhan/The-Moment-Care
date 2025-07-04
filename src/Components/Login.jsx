import React, { useState } from "react";
import "./Login.css"; // Import your CSS here

const Login = ({ setIsAuthenticated, setSelectedTab , userData }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userData) {
      setMessage("Please sign up first.");
    } else if (email === userData.email && password === userData.password) {
      setMessage("Login successful! Redirecting...");
      setIsAuthenticated(true);
      setTimeout(() => {
        setSelectedTab("Home"); // Navigate to home page after login
      }, 1000);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back, MOM!</h2>
        <p className="subtitle">Log in to continue your wellness journey 💖</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        {message && <p style={{ color: message.includes('successful') ? 'green' : 'red', marginTop: '10px' }}>{message}</p>}

        <p className="forgot">
          Forgot your password?{" "}
          <a href="#" onClick={() => alert("Reset password feature coming soon!")}>
            Reset
          </a>
        </p>
        <p className="signup">
          New to MOMent Care?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("SignUp");
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
