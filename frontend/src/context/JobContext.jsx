import { createContext, useEffect, useState } from "react";
import { getJobs } from "../services/jobService";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data);
      setSelectedJob(data[0] || null);
    });
  }, []);

  return (
    <JobContext.Provider value={{ jobs, selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
}

