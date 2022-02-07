import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import mongoose from 'mongoose'

import validator from 'validator'

const UserSchema = new mongoose.Schema({
  // name,email,password,lastname,location,
  name: {
    type: String,
    required: [true, 'please provide name'],
    minlength: 3,
    maxlength: 12,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'provide working email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'plase provide password'],
    minlength: 6,
  },
  lastname: { type: String, trim: true, maxlength: 20, default: 'indian' },
  location: { type: String, trim: true, maxlength: 20, default: 'my city' },
})

UserSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jsonwebtoken.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: '6d',
  })
}

export default mongoose.model('User', UserSchema)
