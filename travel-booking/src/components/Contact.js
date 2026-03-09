import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o1o14ja",      
        
"template_03wdi9i",     
        form.current,
        "fKHzLDEvMEcRFN94E"      
      )
      .then(
        () => {
          alert("Inquiry sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have questions about tours, trekking, or international travel?  
          Send us an inquiry and our team will contact you shortly.
        </p>

        <div className="contact-content">

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Inquiry</h3>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us about your travel plan..."
                rows="5"
                required
              ></textarea>

              <button type="submit">Submit Inquiry</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+91 9588434255</p>
              <p>+91 7666402422</p>
            </div>

            <div className="info-item">
              <h4>✉ Email</h4>
              <p>NovaNirvanaglobal@gmail.com</p>
            </div>

            <div className="info-item">
              <h4>⏰ Working Hours</h4>
              <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
            </div>

            <div className="info-item">
              <h4>📍 Office Address</h4>
              <p>Pune, Maharashtra, India</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;