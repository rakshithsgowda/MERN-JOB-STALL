import User from '../models/User.js'

// ---------------------------REGISTER-USER --------------------------

const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error in register user' })
  }
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
