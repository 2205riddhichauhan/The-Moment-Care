import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header.jsx";
import SideBar from "./Components/SideBar.jsx";
import Footer from "./Components/Footer.jsx";
import HomeContent from "./Components/HomeContent.jsx";
import BookContent from "./Components/BookContent.jsx";
import DoDoNotForMom from "./Components/DoDoNotForMom.jsx";
import LearnWithUs from "./Components/LearnWithUs.jsx";
import MusicList from "./Components/MusicList.jsx";
import GuideForMother from "./Components/GuideForMother.jsx";
import Tablets from "./Components/Tablets.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import WelcomePage from "./Components/WelcomePage.jsx";
import Feedback from "./Components/Feedback.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import FAQs from './Components/FAQs.jsx';
import RateUs from "./Components/RateUs.jsx";
 // make sure this file exists

function App() {
  const [selectedTab, setSelectedTab] = useState("Welcome");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null); // stores signup data
 
  const renderContent = () => {
    if (!isAuthenticated && selectedTab === "Welcome") {
      return (
        <WelcomePage
          setIsAuthenticated={setIsAuthenticated}
          setSelectedTab={setSelectedTab}
        />
      );
    }

    switch (selectedTab) {
      case "Home":
        return <HomeContent />;
      case "Mother's Rulebook":
        return <DoDoNotForMom />;
      case "Discover With Us":
        return <LearnWithUs />;
      case "Serene Sounds":
        return <MusicList />;
      case "Pragnancy Book-Shelf":
        return <BookContent />;
      case "MotherHood Guidance":
        return <GuideForMother />;
      case "Carefully Prescribed":
        return <Tablets />;
      case "Feedback":
        return <Feedback />;
      case "About Us":
        return <AboutUs />;
      case "FAQs":
        return <FAQs />;
      case "Rate Us":
        return <RateUs/>  
     case "Login":
        return (
        <Login
        setIsAuthenticated={setIsAuthenticated}
        setSelectedTab={setSelectedTab}
        userData={userData}
        />
        );
      case "SignUp":
        return (
        <SignUp
        setIsAuthenticated={setIsAuthenticated}
        setSelectedTab={setSelectedTab}
        setUserData={setUserData}
        />
        );

      default:
        return <h3 style={{ padding: '2rem' }}>Coming Soon...</h3>;
    }
  };

  const shouldShowSidebar = selectedTab !== "Welcome" && selectedTab !== "Login" && selectedTab !== "SignUp";

  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {shouldShowSidebar && (
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        )}
        <main style={{ flex: 1, overflowY: "auto", padding: "1rem" }}>
          {renderContent()}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;


