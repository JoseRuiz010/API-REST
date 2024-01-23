import express from 'express';

import expressLoader from './loaders/express.js';
import { conectedDatabase } from './DB/index.js';
import { config } from './config/index.js';
import { PasswordEncode } from './utils/encripting.js';
import { UserModel } from './models/User.model.js';

conectedDatabase()


const app = express()
expressLoader({ app: app })
app.listen(config.port, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
    return;
  }
  console.log(`server on port ${config.port}`)
})

