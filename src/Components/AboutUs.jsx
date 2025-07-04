import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <p className="about-us-intro">
          <span className="brand-name">MOMent Care</span> is a heartfelt initiative designed to provide a safe, educational, and calming space for mothers navigating the beautiful and challenging journey of motherhood.
        </p>

        <p className="about-us-text">
          Built with love by a student learning React, this platform is a reflection of both technical growth and personal empathy. Inspired by real-life stories, the goal of MOMent Care is to use modern web technology to serve the community—especially mothers—by offering valuable resources and emotional support.
        </p>

        <h2 className="section-heading">Why MOMent Care?</h2>
        <ul className="feature-list">
          <li><strong>📚 Learn With Us:</strong> Informative articles and curated knowledge for expecting and new mothers.</li>
          <li><strong>🎶 Serene Sounds:</strong> Relaxing music to help moms rest, recharge, and bond with their babies.</li>
          <li><strong>📖 Pregnancy Book-Shelf:</strong> Trusted books and reading materials hand-picked for mothers.</li>
          <li><strong>💊 Carefully Prescribed:</strong> Guidance on essential vitamins and tablets during pregnancy.</li>
          <li><strong>💡 Guide for Motherhood:</strong> Practical, mental, and emotional tips from professionals and experienced moms.</li>
        </ul>

        <h2 className="section-heading">Our Vision 🌟</h2>
        <p className="about-us-text">
          To create an inclusive digital sanctuary where every mother, regardless of background, feels educated, supported, and empowered.
        </p>

        <h2 className="section-heading">Our Mission 🚀</h2>
        <p className="about-us-text">
          To deliver compassionate, accessible, and high-quality resources for moms using the power of modern web development—crafted with care by a student passionate about learning and helping.
        </p>

        <h2 className="section-heading">Our Values 💖</h2>
        <ul className="values-list">
          <li><strong>Empathy:</strong> We design with a mother's heart in mind.</li>
          <li><strong>Honesty:</strong> We provide genuine, verified, and helpful content.</li>
          <li><strong>Growth:</strong> Just like motherhood, our platform grows with experience and feedback.</li>
          <li><strong>Inclusivity:</strong> Every mother matters. Every story counts.</li>
        </ul>

        <h2 className="section-heading">Built by a Student 👩‍💻</h2>
        <p className="about-us-text">
          This platform is also a personal journey of learning and development in React.js. Every component, feature, and page is built with dedication not just to improve coding skills—but to make a meaningful difference in real lives.
        </p>

        <h2 className="section-heading">Join Our Community 🌍</h2>
        <p className="about-us-text">
          We welcome feedback, ideas, and participation! If you're a mother, student, developer, or expert—reach out, contribute, and grow with us. Let's create a platform that celebrates and supports motherhood, together.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
