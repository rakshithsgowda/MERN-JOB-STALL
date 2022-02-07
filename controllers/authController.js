import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

// ---------------------------REGISTER-USER --------------------------

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError(
      'registeration parameters mismatch,provide all values'
    )
  }

  const user = await User.create({ name, email, password })
  res.status(StatusCodes.OK).json({ user })
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
