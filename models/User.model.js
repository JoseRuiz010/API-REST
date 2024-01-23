import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  email: { type: String },
  enabled: { type: Boolean },
  username: { type: String },
  password: { type: String },
},

  {
    timeseries: true
  })

export const UserModel = model('user', userSchema);