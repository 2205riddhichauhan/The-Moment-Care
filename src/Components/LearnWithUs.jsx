import React from 'react';
import './LearnWithUs.css';

const videos = [
  {
    title: "Pregnancy Yoga Second Trimester (30 Minute Prenatal Yoga)",
    url: "https://www.youtube.com/embed/k1dNL03Ic_8"
  },
  {
    title: "25 Mins | Prenatal Yoga for Third Trimester",
    url: "https://www.youtube.com/embed/YMDX4MtnT-A"
  },
  {
    title: "30-Minute Prenatal Yoga At Home (All Trimesters, No Equipment)",
    url: "https://www.youtube.com/embed/51KzEXZ3Xrs"
  },
  {
    title: "20-Min Gentle Prenatal Morning Yoga | Safe for All Trimesters",
    url: "https://www.youtube.com/embed/IejkzFLOu9U"
  },
  {
    title: "25 Minute Pregnancy Yoga Routine | All Trimesters Stretch & Breathe",
    url: "https://www.youtube.com/embed/t-WAyrP2dx8"
  },
  {
    title: "20-Minute Second Trimester Prenatal Yoga",
    url: "https://www.youtube.com/embed/SWx4pjNEOko"
  },
  {
    title: "15-Minute Labor Prep Prenatal Yoga Flow for Third Trimester",
    url: "https://www.youtube.com/embed/auS7n7xBjVg"
  },
  {
    title: "Third Trimester Pregnancy Yoga | 30 Minute Exercise Routine",
    url: "https://www.youtube.com/embed/gtKn3P52MQc"
  },
  {
    title: "10 MINUTE PREGNANCY YOGA FOR BEDTIME | Deeply Relaxing Flow",
    url: "https://www.youtube.com/embed/_6EM0MtJm1M"
  },
  {
    title: "15-Minute Pelvic Floor Exercises for Pregnant Women",
    url: "https://www.youtube.com/embed/WUCivmJVSz8"
  }
];

const PregnancyYogaVideos = () => {
  return (
    <div className="video-wrapper">
        <h2>Pregnancy Yoga & Wellness Videos 🧘‍♀️</h2>
        <p className="intro-text">Learn gentle yoga, stretching, and care techniques during pregnancy with us.</p>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="100%"
              height="215"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PregnancyYogaVideos;
