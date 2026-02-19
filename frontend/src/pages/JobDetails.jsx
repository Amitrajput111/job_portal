import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById, applyForJob } from "../services/jobService";
import { AuthContext } from "../context/AuthContext";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const data = await getJobById(id);
      setJob(data);
    } catch (error) {
      console.error("Error fetching job:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setApplying(true);
    try {
      const response = await applyForJob(id);
      setMessage(response.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to apply");
    } finally {
      setApplying(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!job) return <div className="error">Job not found</div>;

  return (
    <div className="job-details-page">
      <div className="job-details-container">
        <div className="job-header">
          <h1>{job.title}</h1>
          <div className="company-info">
            <h2>{job.company?.name}</h2>
            <p>{job.location}</p>
          </div>
        </div>

        <div className="job-meta">
          <span className="job-type">{job.jobType}</span>
          <span className="salary">₹{job.salary?.toLocaleString()}</span>
          <span className="positions">{job.position} positions</span>
        </div>

        <div className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        {job.requirements && job.requirements.length > 0 && (
          <div className="job-requirements">
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {message && <div className="message">{message}</div>}

        {user?.role === "student" && (
          <button
            className="apply-button"
            onClick={handleApply}
            disabled={applying}
          >
            {applying ? "Applying..." : "Apply Now"}
          </button>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
