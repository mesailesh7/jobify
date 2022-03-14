import express from "express";

const router = express.Router();

import {
  createJob,
  updateJob,
  getAllJobs,
  deleteJob,
  showStatus,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);
// rember about :id
router.route("/stats").get(showStatus);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
