import React, { useState, useEffect } from "react";
import "./Trekking.css";

/* ---------------------------
   Trekking Slider Images
---------------------------- */
const trekkingImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // mountains
  "https://images.unsplash.com/photo-1496996317594-95a0cf707af5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  "https://images.unsplash.com/photo-1500534623283-312aade485b7", // forest trek
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // snow trek
];

/* ---------------------------
   Trekking Packages
---------------------------- */
const trekkingData = [
  {
    title: "Triund Trek – Himachal",
    desc: "Perfect beginner trek with stunning Dhauladhar views, camping under the stars and bonfire nights.",
    price: "For More Details"
  },
  {
    title: "Kedarkantha Snow Trek",
    desc: "One of India’s most popular winter treks with frozen lakes, snow-covered trails and breathtaking summit sunrise.",
    price: "For More Details"
  },
  {
    title: "Hampta Pass Adventure",
    desc: "Crossing from lush green valleys to barren Spiti landscapes with river crossings and glacier views.",
    price: "For More Details"
  },
  {
    title: "Tawang Monastery Trek",
    desc: "Spiritual Himalayan trekking experience combined with scenic monastery visits in Arunachal Pradesh.",
    price: "For More Details"
  },
  {
    title: "Sandakphu Trek",
    desc: "Witness 4 of the 5 highest peaks in the world including Everest & Kanchenjunga from a single viewpoint.",
    price: "For More Details"
  },
  {
    title: "Valley of Flowers Trek",
    desc: "UNESCO heritage alpine valley filled with rare Himalayan flowers and serene landscapes.",
    price: "For More Details"
  }
];

/* ---------------------------
   Component
---------------------------- */

function Trekking() {
  const [current, setCurrent] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trekkingImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Controls */
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % trekkingImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? trekkingImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="trekking" className="trekking">
      <h2>Adventure Trekking Experiences</h2>

      {/* -------- Slider -------- */}
      <div className="trek-slider">
        <img src={trekkingImages[current]} alt="Trekking Adventure" />

        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        <div className="slider-dots">
          {trekkingImages.map((_, index) => (
            <span
              key={index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* -------- Trek Cards -------- */}
      <div className="trek-grid">
        {trekkingData.map((trek, index) => (
          <div className="trek-card" key={index}>
            <h3>{trek.title}</h3>
            <p>{trek.desc}</p>
            <h4>{trek.price}</h4>
            <button>Please Contact</button>
             <a href="tel:+919588434255 / 7666402422">
            <button className="contact-btn">
              Here
            </button>
          </a>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trekking;