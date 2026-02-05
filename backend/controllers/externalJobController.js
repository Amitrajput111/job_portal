import axios from "axios";

export const fetchExternalJobs = async (req, res) => {
  try {
    const response = await axios.get("https://remotive.com/api/remote-jobs");

    const jobs = response.data.jobs.slice(0, 50).map(job => ({
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      description: job.description,
      jobType: job.job_type || "Full-time",
      applyUrl: job.url,
      source: "external",
      createdAt: new Date(job.publication_date)
    }));

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch external jobs" });
  }
};
