import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import FilterPanel from "../components/filters/FilterPanel";
import JobList from "../components/jobs/JobList";
import JobPreview from "../components/jobs/JobPreview";
import "./Jobs.css";

function Jobs() {
  const { jobs, loading } = useContext(JobContext);
  const [selectedJob, setSelectedJob] = useState(null);

  if (loading) {
    return <div className="loading">Loading jobs...</div>;
  }

  return (
    <div className="jobs-page">
      <div className="jobs-container">
        <aside className="sidebar">
          <FilterPanel />
        </aside>
        <main className="main-content">
          <div className="jobs-header">
            <h1>Find Your Dream Job</h1>
            <p>{jobs.length} jobs available</p>
          </div>
          <JobList jobs={jobs} onSelect={setSelectedJob} />
        </main>
        {selectedJob && (
          <aside className="preview-panel">
            <JobPreview job={selectedJob} />
          </aside>
        )}
      </div>
    </div>
  );
}

export default Jobs;
