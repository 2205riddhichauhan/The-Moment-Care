import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './WelcomePage.css';

const WelcomePage = ({ setIsAuthenticated, setSelectedTab }) => {
  const [selectedTab, setLocalTab] = useState(null); // local tab state

  const renderTab = () => {
    if (selectedTab === 'Login') {
      return <Login setIsAuthenticated={setIsAuthenticated} setSelectedTab={setSelectedTab} />;
    } else if (selectedTab === 'SignUp') {
      return <SignUp setIsAuthenticated={setIsAuthenticated} setSelectedTab={setSelectedTab} />;
    } else {
      return (
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Welcome to <span className="brand">MOMent Care</span> 🌸</h1>
            <p>
              A safe, supportive space for every mom on her motherhood journey.  
              Whether you're seeking guidance, music for calm, or resources to grow — we're here for you.
            </p>

            <ul>
              <li>📚 Pregnancy Books</li>
              <li>🎧 Relaxing Music</li>
              <li>👩‍⚕️ Expert Health Tips</li>
              <li>👶 Gentle Guidance</li>
            </ul>

            <div className="welcome-buttons">
              <button onClick={() => setLocalTab('Login')}>Login</button>
              <button onClick={() => setLocalTab('SignUp')}>Sign Up</button>
            </div>
          </div>

          <div className="welcome-image">
            <img
              src="/img4.jpg"
              alt="Mother and baby illustration"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="welcome-page">
      <main className="welcome-main">
        {renderTab()}
      </main>
    </div>
  );
};

export default WelcomePage;

