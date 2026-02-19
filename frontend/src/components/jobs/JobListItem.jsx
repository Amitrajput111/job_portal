import "../JobCard.css";

function JobListItem({ job, onClick }) {
  return (
    <div className="job-card" onClick={onClick}>
      <h4>{job.title}</h4>
      <p>{job.company}</p>
      <span>{job.location}</span>
    </div>
  );
}

export default JobListItem;
