import "./JobListItem.css";

function JobListItem({ job, onClick }) {
  return (
    <div className="job-list-item" onClick={onClick}>
      <div className="job-header">
        <h3>{job.title}</h3>
        <span className="job-type-badge">{job.jobType || job.type}</span>
      </div>
      <p className="company-name">{job.company?.name || job.company}</p>
      <div className="job-meta">
        <span className="location">📍 {job.location}</span>
        {job.salary && <span className="salary">💰 ₹{job.salary.toLocaleString()}</span>}
      </div>
    </div>
  );
}

export default JobListItem;
