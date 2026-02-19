import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
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

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎯 Easy Job Search</h3>
            <p>Find jobs that match your skills and preferences with our advanced search filters.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Quick Apply</h3>
            <p>Apply to multiple jobs with just one click. Save time and effort.</p>
          </div>
          <div className="feature-card">
            <h3>🏢 Top Companies</h3>
            <p>Connect with leading companies looking for talented professionals like you.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Track Applications</h3>
            <p>Keep track of all your job applications in one place.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

