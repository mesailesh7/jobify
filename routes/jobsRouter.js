import express from "express";

const router = express.Router();

import {
  createJob,
  updateJobs,
  getAllJobs,
  deleteJob,
  showStatus,
} from "../controllers/jobsController.js";


export deafult router