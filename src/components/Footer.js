import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

      
        <div className="footer-section">
          <h2 className="footer-logo">Nirvana Global ~ Journey Of Joy</h2>
          <p>
            Creating unforgettable spiritual journeys, thrilling trekking
            adventures, and international travel experiences with comfort,
            safety, and transparency.
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#trekking">Trekking</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Top Destinations</h3>
          <ul>
            <li>Buddhist Circuit</li>
            <li>Sri Lanka</li>
            <li>Bhutan</li>
            <li>Dubai</li>
            <li>Himalayan Treks</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📞 +91 9588434255, +91 7666402422</p>
          <p>✉ NovaNirvanaglobal@gmail.com</p>

          <div className="social-icons">
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </a>

            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📸
            </a>

            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>

            <a 
              href="https://yourwebsite.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Website"
            >
              🌐
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Made by Aadarsh Deep Anthony. 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;