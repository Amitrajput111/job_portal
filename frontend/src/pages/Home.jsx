import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobListItem from "../components/jobs/JobListItem";
import "./Home.css";
import heroImage from "../assets/realistic_hero.jpg";

function Home() {
  const navigate = useNavigate();
  const { jobs } = useContext(JobContext);
  
  // Get latest 3 jobs for the card section
  const latestJobs = jobs?.slice(0, 3) || [];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Find Your Dream Job Today</h1>
            <p>Connect with top companies and discover opportunities that match your skills and aspirations. Elevate your career with HireFlow.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate("/jobs")}>
                Browse Jobs
              </button>
              <button className="btn-secondary" onClick={() => navigate("/register")}>
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Professional Job Portal" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Active Jobs</p>
          </div>
          <div className="stat-item">
            <h3>800+</h3>
            <p>Companies</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Job Seekers</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {latestJobs.length > 0 && (
        <section className="latest-jobs-section">
          <div className="latest-jobs-header">
            <h2>Latest Opportunities</h2>
            <p>Explore the most recently added jobs on HireFlow</p>
          </div>
          <div className="latest-jobs-grid">
            {latestJobs.map(job => (
              <JobListItem 
                key={job._id || job.id} 
                job={job} 
                onClick={() => navigate(`/jobs`)} 
              />
            ))}
          </div>
          <div className="view-all-jobs">
             <button className="btn-secondary-outline" onClick={() => navigate("/jobs")}>View All Jobs</button>
          </div>
        </section>
      )}

      <section className="categories-section">
        <div className="categories-header">
          <h2>Popular Job Categories</h2>
          <p>Explore opportunities in top-demand industries</p>
        </div>
        <div className="categories-grid">
          <div className="category-card" onClick={() => navigate("/jobs?category=technology")}>
            <div className="category-icon">💻</div>
            <h3>Technology</h3>
            <p>1,200+ Open Positions</p>
          </div>
          <div className="category-card" onClick={() => navigate("/jobs?category=design")}>
            <div className="category-icon">🎨</div>
            <h3>Design & Creative</h3>
            <p>850+ Open Positions</p>
          </div>
          <div className="category-card" onClick={() => navigate("/jobs?category=marketing")}>
            <div className="category-icon">📈</div>
            <h3>Marketing</h3>
            <p>640+ Open Positions</p>
          </div>
          <div className="category-card" onClick={() => navigate("/jobs?category=finance")}>
            <div className="category-icon">💼</div>
            <h3>Finance</h3>
            <p>420+ Open Positions</p>
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

      <section className="companies-section">
        <h2>Top Companies Hiring Now</h2>
        <div className="companies-grid">
          <div className="company-logo-card">
            <h3>Google</h3>
            <p>Software & Tech</p>
          </div>
          <div className="company-logo-card">
            <h3>Microsoft</h3>
            <p>Enterprise Solutions</p>
          </div>
          <div className="company-logo-card">
            <h3>Amazon</h3>
            <p>E-commerce & Cloud</p>
          </div>
          <div className="company-logo-card">
            <h3>Netflix</h3>
            <p>Entertainment</p>
          </div>
          <div className="company-logo-card">
            <h3>Meta</h3>
            <p>Social Media</p>
          </div>
          <div className="company-logo-card">
            <h3>Apple</h3>
            <p>Hardware & Tech</p>
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
