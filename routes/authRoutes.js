import express from 'express'
const router = express.Router()

import {
  loginUser,
  registerUser,
  updateUser,
} from '../controllers/authController.js'

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateUser').patch(updateUser)

export default router
