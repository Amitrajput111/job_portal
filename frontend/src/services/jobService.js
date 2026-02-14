export const getJobs = async () => {
  const response = await fetch("http://localhost:5000/api/jobs");
  return response.json();
};
