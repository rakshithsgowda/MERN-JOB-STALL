import express from 'express'
const router = express.Router()

import {
  getAllJob,
  deleteJob,
  updateJob,
  showStats,
  createJob,
} from '../controllers/jobsController'

router.route('/').post(createJob).get(getAllJob)
// Lets be aware of -----------> :id
router.route('/:id').delete(deleteJob).patch(updateJob)
router.route('/stats').get(showStats)

export default router
