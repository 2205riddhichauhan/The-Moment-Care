import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageContent from "./HomePageContent";

const HomeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "projectPhoto.jpg", alt: "Pregnancy Care", caption: "The journey to ParentHood" },
    { id: 2, image: "img1.jpg", alt: "Mother Care", caption: "Expert Care, Every Stage" },
    { id: 3, image: "img2.jpg", alt: "Baby Care", caption: "Care for You and Baby" },
    { id: 4, image: "img3.jpg", alt: "First Cry", caption: "The Magic of Pregnancy" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Carousel Images */}
      <div style={{ width: "100%", position: "relative" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              display: index === currentSlide ? "block" : "none",
              transition: "opacity 0.5s ease-in-out"
            }}
          >
            <div style={{ width: "100%", height: "350px", overflow: "hidden", borderRadius: "12px" }}>
              <img
                src={slide.image}
                alt={slide.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
            <div style={{ marginTop: "1rem", textAlign: "center", fontWeight: "600", fontSize: "1.2rem" }}>
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Content Below Carousel */}
      <div style={{ marginTop: "2rem" }}>
        <HomePageContent />
      </div>

      {/* Tagline */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h4 style={{ fontFamily: "Raleway", fontWeight: "500", color: "#555" }}>
  🌸 Discover the Beauty. Learn with Love. Grow into Motherhood. 🌸
</h4>
      </div>
    </div>
  );
};

export default HomeContent;
