const createJob = async (req, res) => {
  res.send('create job')
}
const getAllJob = async (req, res) => {
  res.send('get all the jobs job')
}
const deleteJob = async (req, res) => {
  res.send('deete job')
}
const updateJob = async (req, res) => {
  res.send('update job')
}
const showStats = async (req, res) => {
  res.send('stats of job')
}

export { createJob, deleteJob, updateJob, getAllJob, showStats }
