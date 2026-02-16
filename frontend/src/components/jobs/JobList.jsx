import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import JobListItem from "./JobListItem";

function JobList({ jobs, onSelect }) {
  const { filters } = useContext(FiltersContext);

  const filteredJobs = jobs.filter((job) => {
    if (filters.remote && !job.remote) return false;
    if (filters.fullTime && job.type !== "Full Time") return false;
    if (filters.internship && job.type !== "Internship") return false;
    return true;
  });

  return (
    <div className="job-list">
      {filteredJobs.map((job) => (
        <JobListItem
          key={job._id}
          job={job}
          onClick={() => onSelect(job)}
        />
      ))}
    </div>
  );
}

export default JobList;
