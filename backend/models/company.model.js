import mongoose from "mongoose";

const jcompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descripton: {
    type: String
  },
  website: [
    {
      type: String,
    },
  ],
  logo: {
    type: String,
    required: true,
  },
  userId: {
    type:mongoose.Shema.Types.ObjectId,
    ref:'User',
    required:true
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
}{timestamps:true});
export const job = mongoose.model("Job", jobSchema);
