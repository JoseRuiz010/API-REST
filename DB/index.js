import mongoose from 'mongoose'
import { config } from '../config/index.js'

export const conectedDatabase = async () => await mongoose.connect(config.databaseURL)
  .then(() => console.log('Connected!'))
  .catch(err => console.log("ERROR --->" + err))
  ;