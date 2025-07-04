import React, { useState } from 'react';
import './Feedback.css'; // You can add your custom CSS for styling

const FeedbackForm = () => {
  // Setting up states for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // For showing confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form submission (you can replace this with an API call)
    console.log('Form Submitted:', { name, email, feedback });
    setIsSubmitted(true); // Show confirmation message
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      {isSubmitted ? (
        <div className="thank-you-message">
          <h3>Thank you for your feedback!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
