import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>JobPortal</h3>
          <p>Find your dream job today</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/jobs">Browse Jobs</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>support@jobportal.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 JobPortal. All rights reserved. | Developed by Amit Singh Rajput</p>
      </div>
    </footer>
  );
}

export default Footer;
