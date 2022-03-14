const createJob = async (req, res) => {
  res.send("create job");
};
const getAllJobs = async (req, res) => {
  res.send("Get all Jobs");
};
const updateJob = async (req, res) => {
  res.send("cupdate job");
};
const deleteJob = async (req, res) => {
  res.send("delete job");
};
const showStatus = async (req, res) => {
  res.send("show stats");
};

export { createJob, updateJob, getAllJobs, deleteJob, showStatus };
