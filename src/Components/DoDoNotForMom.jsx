import React from 'react';
import './DoDoNotForMom.css';

const MothersRulebook = () => {
  const maternalCareRules = {
    dos: [
      {
        category: "Nutrition",
        rules: [
          "Eat a balanced diet rich in fruits, vegetables, and proteins",
          "Stay hydrated by drinking 8-10 glasses of water daily",
          "Take prescribed prenatal vitamins regularly",
          "Include foods rich in folic acid and iron",
          "Have small, frequent meals throughout the day"
        ]
      },
      {
        category: "Exercise & Rest",
        rules: [
          "Get regular, moderate exercise as approved by your doctor",
          "Practice prenatal yoga or gentle stretching",
          "Get adequate sleep (7-9 hours)",
          "Take short breaks during the day",
          "Practice relaxation techniques"
        ]
      },
      {
        category: "Healthcare",
        rules: [
          "Attend all scheduled prenatal check-ups",
          "Monitor weight gain",
          "Keep track of baby's movements",
          "Take medications as prescribed",
          "Maintain good hygiene"
        ]
      }
    ],
    donts: [
      {
        category: "Lifestyle",
        rules: [
          "Avoid smoking and second-hand smoke",
          "Stay away from alcohol",
          "Limit caffeine intake",
          "Avoid raw or undercooked foods",
          "Don't skip meals"
        ]
      },
      {
        category: "Activities",
        rules: [
          "Avoid heavy lifting",
          "Don't engage in high-risk sports",
          "Avoid hot tubs and saunas",
          "Don't clean cat litter boxes",
          "Avoid exposure to harmful chemicals"
        ]
      },
      {
        category: "Health Risks",
        rules: [
          "Don't take over-the-counter medications without consulting your doctor",
          "Avoid exposure to X-rays",
          "Don't ignore unusual symptoms",
          "Avoid contact with people who have infectious illnesses",
          "Don't skip prenatal vitamins"
        ]
      }
    ]
  };

  return (
    <div className="rulebook-wrapper">
    <div className="banner-image">
      <img src="dodontphoto.jpg" alt="Mother's Rulebook" />
    </div>
  
    <h2 className="banner-title">A Guide to Gentle Pregnancy Care 💖</h2>
  
    <div className="rulebook-container">
      <h1>Mother's Rulebook</h1>
  
      <div className="rules-section">
        {/* Do's Section */}
        <div className="dos-section">
          <h2>Do's for Mothers</h2>
          {maternalCareRules.dos.map((category, index) => (
            <div key={index} className="category-section">
              <h3>{category.category}</h3>
              <ul>
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex}>{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        {/* Don'ts Section */}
        <div className="donts-section">
          <h2>Don'ts for Mothers</h2>
          {maternalCareRules.donts.map((category, index) => (
            <div key={index} className="category-section">
              <h3>{category.category}</h3>
              <ul>
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex}>{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default MothersRulebook;
