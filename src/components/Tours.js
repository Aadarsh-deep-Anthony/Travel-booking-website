import React, { useState, useEffect } from "react";
import "./Tours.css";

/* ---------------------------
   Image Slider Data
---------------------------- */
const images = [
  "https://images.unsplash.com/photo-1650638987536-6fbcb9bc6085?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Buddhist temple
  "https://images.unsplash.com/photo-1552978534-9d01e1f91517?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sri Lanka
  "https://images.unsplash.com/photo-1597389935051-2f9dc0f05456?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bhutan
"https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
  "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?q=80&w=637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661964303354-f0496d6d6e0b?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

/* ---------------------------
   Tour Package Data
---------------------------- */
const toursData = [
  {
    title: "Complete Buddhist Circuit – India",
    desc: "Bodh Gaya, Sarnath, Kushinagar, Rajgir & Nalanda with guided meditation sessions, heritage storytelling and monastery interactions.",
    price: "For More Details"
  },
  {
    title: "Sri Lanka Ramayana & Buddhist Trail",
    desc: "Colombo, Kandy, Nuwara Eliya & Temple of the Tooth Relic with scenic hill country views and sacred temple visits.",
    price: "For More Details"
  },
  {
    title: "Bhutan Happiness Retreat",
    desc: "Paro, Thimphu & Tiger’s Nest Monastery with peaceful Himalayan landscapes and authentic monastery stays.",
    price: "For More Details"
  },
  {
    title: "Dubai Luxury Experience",
    desc: "Desert safari, Burj Khalifa visit, Marina cruise and premium city experiences with optional Abu Dhabi upgrade.",
    price: "For More Details"
  },
  {
    title: "North-East Monastery Trail",
    desc: "Tawang, Bomdila & Himalayan valleys with monastery stays and cultural immersion.",
    price: "For More Details"
  },
  {
    title: "Maharashtra Cave Heritage",
    desc: "Ajanta & Ellora exploration with expert archaeological storytelling and guided heritage walks.",
    price: "For More Details"
  }
];

/* ---------------------------
   Component
---------------------------- */

function Tours() {
  const [current, setCurrent] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* Manual Controls */
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section id="tours" className="tours">
      <h2>Sacred & International Travel Experience</h2>

      {/* ---------------- Slider ---------------- */}
      <div className="slider">
        <img src={images[current]} alt="Travel Destination" />

        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>

        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>

        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      
      <div className="tour-grid">
        {toursData.map((tour, index) => (
          <div className="tour-card" key={index}>
            <h3>{tour.title}</h3>
            <p>{tour.desc}</p>
            <h4>{tour.price}</h4>
            <h3>Please Contact </h3>

          <a href="tel:+919588434255 / 7666402422">
            <button className="contact-btn">
              📞
            </button>
          </a>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tours;