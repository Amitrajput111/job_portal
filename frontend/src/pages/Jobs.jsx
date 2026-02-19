import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import FilterPanel from "../components/filters/FilterPanel";
import JobList from "../components/jobs/JobList";
import JobPreview from "../components/jobs/JobPreview";
import "./Jobs.css";

function Jobs() {
  const { jobs, selectedJob, setSelectedJob } = useContext(JobContext);

  return (
    <div className="jobs-page">
      <div className="jobs-container">
        <FilterPanel />
        <JobList jobs={jobs} onSelect={setSelectedJob} />
        <JobPreview job={selectedJob} />
      </div>
    </div>
  );
}

export default Jobs;
