// ---------------------------REGISTER-USER --------------------------

const registerUser = async (req, res) => {
  await res.send('register user')
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
