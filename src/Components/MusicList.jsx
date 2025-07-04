import React from 'react';
import './MusicList.css';

const sounds = [
  {
    title: "Achyutam Keshavam",
    url: "https://www.youtube.com/embed/F6Ra2UbGmJA"
  },
  {
    title: "Shankar Teri Jata Mein Ganga",
    url: "https://www.youtube.com/embed/XSPL-PsqTTQ"
  },
  {
    title: "Raghupati Raghav Raja Ram",
    url: "https://www.youtube.com/embed/TXjET8EMPEE"
  },
  {
    title: "Hey Dukh Bhanjan Maruti Nandan",
    url: "https://www.youtube.com/embed/WggjySbUOv0"
  },
  {
    title: "Kanhaiya Le Chal Parli Paar",
    url: "https://www.youtube.com/embed/cdc_bgVMkOs"
  },
  {
    title: "Ram Naam Sukhdai",
    url: "https://www.youtube.com/embed/RSuQJOwcLwo"
  },
  {
    title: "Hey Mahaveer Karo Kalyan",
    url: "https://www.youtube.com/embed/AUWiyuG98XI"
  },
  {
    title: "Mere Pyare Banke Bihari",
    url: "https://www.youtube.com/embed/8uz7h-6766o"
  },
  {
    title: "Saja Do Ghar Ko Gulshan Sa",
    url: "https://www.youtube.com/embed/aTKWRftuu1Q"
  },
  {
    title: "Darbar Mein Sajde",
    url: "https://www.youtube.com/embed/ewxoCqpuP4k"
  },
  {
    title: "Tara Hai Sara Zamana Shyam",
    url: "https://www.youtube.com/embed/aUnLmIO1TOE"
  },
  {
    title: "Phoolo Mein Saja",
    url: "https://www.youtube.com/embed/qcq5hFlV3C0"
  },
  {
    title: "Man Mein Ram Basale",
    url: "https://www.youtube.com/embed/ejBqq-81i0U"
  },
  {
    title: "Jinki Pratima Itni Sundar",
    url: "https://www.youtube.com/embed/o9DNUcQs3uU"
  },
  {
    title: "Mere Mohan Mere Mohan",
    url: "https://www.youtube.com/embed/lSnyAwxDnks"
  },

];

const PregnancySounds = () => {
  return (
    <div className="sound-wrapper">
      <h2>Soothing Bhajans and Divine Music 🎶</h2>
      <p className="intro-text">Relax with these beautiful bhajans and experience peace and devotion.</p>
      <div className="sound-grid">
        {sounds.map((sound, index) => (
          <div key={index} className="sound-card">
            <iframe
              width="100%"
              height="215"
              src={sound.url}
              title={sound.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{sound.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PregnancySounds;




