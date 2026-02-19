import "./JobCard.css";

function JobCard({ job, onClick }) {
  return (
    <div className="job-card" onClick={onClick}>
      <h4>{job.title}</h4>
      <p>{job.company}</p>
      <span>{job.location}</span>
    </div>
  );
}

export default JobCard;
