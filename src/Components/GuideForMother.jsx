import React from 'react';
import './GuideForMother.css';

const PregnancyGuidance = () => {
  return (
    <div className="pregnancy-container">
      <h1 className="title">Pregnancy Guidance: What Every Expecting Mother Should Know</h1>

      {/* Nutrition */}
      <section className="guidance-section">
        <h2>🥗 Nutrition</h2>
        <ul>
          <li>Eat a variety of fruits, vegetables, whole grains, and lean proteins daily.</li>
          <li>Take a daily prenatal vitamin with folic acid, iron, calcium, and DHA.</li>
          <li>Drink at least 8–10 glasses of water per day to stay hydrated.</li>
          <li>Include high-fiber foods to prevent constipation.</li>
          <li>Limit processed foods, sugar, and excess salt.</li>
        </ul>
      </section>

      {/* Avoid Harmful Substances */}
      <section className="guidance-section">
        <h2>🚫 Avoid Harmful Substances</h2>
        <ul>
          <li>Do <strong>not</strong> consume alcohol, tobacco, or recreational drugs.</li>
          <li>Limit caffeine to 200 mg per day (about one 12 oz cup of coffee).</li>
          <li>Avoid raw/undercooked meats, unpasteurized dairy, and deli meats unless heated.</li>
          <li>Do not eat fish high in mercury like shark or swordfish.</li>
        </ul>
      </section>

      {/* Prenatal Care */}
      <section className="guidance-section">
        <h2>🩺 Prenatal Care</h2>
        <ul>
          <li>Attend all prenatal appointments for checkups and screenings.</li>
          <li>Get recommended tests like ultrasounds and blood work.</li>
          <li>Discuss health history, medications, and mental health with your provider.</li>
        </ul>
      </section>

      {/* Physical Activity and Rest */}
      <section className="guidance-section">
        <h2>🧘‍♀️ Physical Activity and Rest</h2>
        <ul>
          <li>Exercise lightly (walking, swimming, yoga) unless advised otherwise.</li>
          <li>Get 7–9 hours of sleep and rest when tired.</li>
          <li>Use pillows to support sleep posture.</li>
          <li>Practice relaxation: deep breathing, stretching, or meditation.</li>
        </ul>
      </section>

      {/* Warning Signs */}
      <section className="guidance-section warning">
        <h2>⚠️ Warning Signs to Call Your Doctor</h2>
        <ul>
          <li>Severe abdominal pain or heavy bleeding.</li>
          <li>Leaking fluid, high fever, or vision changes.</li>
          <li>Swelling in hands/face or no fetal movement.</li>
        </ul>
      </section>
    </div>
  );
};

export default PregnancyGuidance;
