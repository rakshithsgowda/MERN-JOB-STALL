const createJob = async (req, res) => {
  await res.send('create job')
}
const getAllJob = async (req, res) => {
  await res.send('get all the jobs job')
}
const deleteJob = async (req, res) => {
  await res.send('delete job')
}
const updateJob = async (req, res) => {
  await res.send('update job')
}
const showStats = async (req, res) => {
  await res.send('stats of job')
}

export { createJob, deleteJob, updateJob, getAllJob, showStats }
