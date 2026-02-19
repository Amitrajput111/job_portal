import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>Connect with top companies and discover opportunities that match your skills and aspirations.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/jobs")}>
              Browse Jobs
            </button>
            <button className="btn-secondary" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Active Jobs</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Companies</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Job Seekers</p>
          </div>
          <div className="stat-item">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose HireFlow?</h2>
        <div className="features-grid">
          <div className="feature-card feature-blue">
            <div className="feature-icon">🎯</div>
            <h3>Smart Job Matching</h3>
            <p>Our AI-powered algorithm matches you with jobs that fit your skills, experience, and career goals perfectly.</p>
          </div>
          <div className="feature-card feature-green">
            <div className="feature-icon">⚡</div>
            <h3>Quick Apply</h3>
            <p>Apply to multiple jobs with just one click. Save time and increase your chances of landing your dream job.</p>
          </div>
          <div className="feature-card feature-purple">
            <div className="feature-icon">🏢</div>
            <h3>Top Companies</h3>
            <p>Connect with leading companies across India. From startups to Fortune 500 companies, find them all here.</p>
          </div>
          <div className="feature-card feature-orange">
            <div className="feature-icon">📊</div>
            <h3>Track Applications</h3>
            <p>Keep track of all your job applications in one place. Get real-time updates on your application status.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">"Found my dream job within 2 weeks! The platform is easy to use and has great job listings."</p>
            <div className="testimonial-author">
              <div className="author-avatar">P</div>
              <div>
                <h4>Priya Sharma</h4>
                <p>Software Engineer at Tech Corp</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">"Best job portal I've used. Got multiple interview calls and finally landed a great position."</p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div>
                <h4>Rahul Kumar</h4>
                <p>Full Stack Developer at StartupHub</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">"As a recruiter, this platform helped me find talented candidates quickly. Highly recommended!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <h4>Sneha Patel</h4>
                <p>HR Manager at Digital Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of job seekers who found their dream jobs through HireFlow</p>
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Create Free Account
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

