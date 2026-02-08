import express from "express";
import { aiAssistant } from "../controllers/aiAssistant.controller.js";

const router = express.Router();
router.post("/chat", aiAssistant);

export default router;
