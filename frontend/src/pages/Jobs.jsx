import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/external-jobs")
      .then(res => setJobs(res.data))
      .catch(() => setError("Backend not reachable"));
  }, []);

  if (error) return <h3>{error}</h3>;

  if (!jobs.length) return <h3>Loading jobs…</h3>;

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job, i) => (
        <div key={i}>
          <strong>{job.title}</strong> — {job.company}
        </div>
      ))}
    </div>
  );
}
