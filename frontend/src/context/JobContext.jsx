import { createContext, useEffect, useState } from "react";
import { getJobs } from "../services/jobService";

export const JobContext = createContext();

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <JobContext.Provider value={{ jobs }}>
      {children}
    </JobContext.Provider>
  );
}
