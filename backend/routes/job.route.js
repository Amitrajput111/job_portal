import express from "express";
import { postJob, getAllJobs, getJobById, getAdminJobs, deleteJob } from "../controllers/job.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/post", isAuthenticated, postJob);
router.get("/get", getAllJobs);
router.get("/get/:id", getJobById);
router.get("/getadminjobs", isAuthenticated, getAdminJobs);
router.delete("/delete/:id", isAuthenticated, deleteJob);

export default router;
