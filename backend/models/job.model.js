import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  requirements: [
    {
      type: String,
    },
  ],
  salary: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: mongose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  created_by: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});
export const job = mongoose.model("Job", jobSchema);
