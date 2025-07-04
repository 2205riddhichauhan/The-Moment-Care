import React, { useState } from 'react';
import './RateUs.css';

const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Here, you can send the data to a backend or database
    console.log("Rating:", rating, "Comment:", comment);
  };

  return (
    <div className="rate-us-container">
      <h2>Rate Your Experience</h2>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "filled" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="rate-form">
        <textarea
          placeholder="Leave your feedback here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="thank-you">
          <h4>Thank you for your feedback!</h4>
        </div>
      )}
    </div>
  );
};

export default RateUs;
