import { createContext, useEffect, useState } from "react";
import { getJobs } from "../services/jobService";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      setJobs(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, loading, error, fetchJobs }}>
      {children}
    </JobContext.Provider>
  );
}

