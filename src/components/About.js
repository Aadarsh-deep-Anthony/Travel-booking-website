import "./About.css";
import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h2>About Our Journey</h2>
        <p className="about-intro">
          We are not just a travel company — we are creators of meaningful journeys.
          From sacred Buddhist circuits to thrilling Himalayan treks and
          international luxury escapes, we design experiences that inspire,
          transform and stay with you forever.
        </p>

        {/* Vision & Mission */}
        <div className="vision-mission">
          <div className="vm-card">
            <h3>🌍 Our Vision</h3>
            <p>
              To become India’s most trusted travel brand for spiritual,
              adventure and international tourism by delivering authentic,
              safe and unforgettable experiences.
            </p>
          </div>

          <div className="vm-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To connect people with culture, nature and themselves through
              thoughtfully curated travel packages with comfort, safety and
              transparency.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <h3 className="why-title">Why Travel With Us?</h3>

        <div className="why-grid">
          <div className="why-card">
            <h4>🛕 Spiritual Expertise</h4>
            <p>
              Deep knowledge of Buddhist and heritage destinations with
              guided storytelling and cultural insights.
            </p>
          </div>

          <div className="why-card">
            <h4>🏔 Adventure Specialists</h4>
            <p>
              Certified trek leaders, safety-first approach and
              well-planned adventure experiences.
            </p>
          </div>

          <div className="why-card">
            <h4>✈ International Packages</h4>
            <p>
              Seamless visa assistance, premium stays and curated
              sightseeing for Sri Lanka, Bhutan & Dubai.
            </p>
          </div>

          <div className="why-card">
            <h4>💰 Transparent Pricing</h4>
            <p>
              No hidden costs. Clear itinerary, clear inclusions,
              clear experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;