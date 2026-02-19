import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./JobPreview.css";

function JobPreview({ job }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!job) {
    return (
      <div className="job-preview empty">
        <div className="empty-preview">
          <h3>Select a job</h3>
          <p>Click on any job to view details</p>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/jobs/${job._id}`);
  };

  return (
    <div className="job-preview">
      <div className="preview-header">
        <h2>{job.title}</h2>
        <span className="job-type-badge">{job.jobType || job.type}</span>
      </div>
      
      <div className="company-info">
        <h3>{job.company?.name || job.company}</h3>
        <p className="location">📍 {job.location}</p>
      </div>

      {job.salary && (
        <div className="salary-info">
          <span className="salary-label">Salary</span>
          <span className="salary-amount">₹{job.salary.toLocaleString()}/year</span>
        </div>
      )}

      <div className="job-description">
        <h4>About the role</h4>
        <p>{job.description}</p>
      </div>

      {job.requirements && job.requirements.length > 0 && (
        <div className="job-requirements">
          <h4>Requirements</h4>
          <ul>
            {job.requirements.slice(0, 3).map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      <button className="apply-btn" onClick={handleApply}>
        View Details & Apply
      </button>
    </div>
  );
}

export default JobPreview;
