import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send this to backend
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email Us</h3>
            <p>support@jobportal.com</p>
            <p>careers@jobportal.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <h3>Working Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00 AM - 6:00 PM IST</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Tech Park, Sector 5</p>
            <p>Bangalore, Karnataka 560001</p>
          </div>

          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>Social Media</h3>
            <p>Follow us on social platforms</p>
            <div className="social-links">
              <span>LinkedIn</span>
              <span>Twitter</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more..."
              />
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
