import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

// ---------------------------REGISTER-USER --------------------------

const registerUser = async (req, res, next) => {
  const user = await User.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

// ---------------------------LOGIN-USER --------------------------
const loginUser = async (req, res) => {
  await res.send('login user')
}

// ---------------------------UPDATE-USER --------------------------
const updateUser = async (req, res) => {
  await res.send('update user')
}

export { registerUser, updateUser, loginUser }
