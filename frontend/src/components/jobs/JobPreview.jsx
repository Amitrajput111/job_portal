function JobPreview({ job }) {
  if (!job) {
    return <p>Select a job to view details</p>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>{job.company}</strong></p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobPreview;
