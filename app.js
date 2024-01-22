import express from 'express';
import config from './config/index.js';
import expressLoader from './loaders/express.js';

const { port } = config

const app = express()

expressLoader({ app: app })

app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
    return;
  }
  console.log(`server on port ${port}`)
})