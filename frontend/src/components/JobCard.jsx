export default function JobCard({ job }) {
  const score = job?.match?.matchScore;

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 12 }}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>

      {score !== undefined && (
        <strong
          style={{
            color: score > 70 ? "green" : score >= 40 ? "orange" : "gray"
          }}
        >
          Match: {score}%
        </strong>
      )}
    </div>
  );
}
