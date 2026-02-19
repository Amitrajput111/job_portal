import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersContext } from "../../context/FiltersContext";
import JobListItem from "./JobListItem";
import "./JobList.css";

function JobList({ jobs, onSelect }) {
  const { filters } = useContext(FiltersContext);
  const navigate = useNavigate();

  const filteredJobs = jobs.filter((job) => {
    if (filters.remote && !job.remote) return false;
    if (filters.fullTime && job.jobType !== "Full-time") return false;
    if (filters.internship && job.jobType !== "Internship") return false;
    return true;
  });

  const handleJobClick = (job) => {
    if (onSelect) {
      onSelect(job);
    } else {
      navigate(`/jobs/${job._id}`);
    }
  };

  if (filteredJobs.length === 0) {
    return (
      <div className="job-list">
        <div className="empty-state">
          <h3>No jobs found</h3>
          <p>Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="job-list">
      {filteredJobs.map((job) => (
        <JobListItem
          key={job._id}
          job={job}
          onClick={() => handleJobClick(job)}
        />
      ))}
    </div>
  );
}

export default JobList;
