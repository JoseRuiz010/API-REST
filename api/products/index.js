import express from 'express';
import { get } from '../../services/products.services.js';
import { middlewareValidator } from '../../middleware/products.middleware.js';

const route = express.Router();
route.use(middlewareValidator)
route.get('/', get);


export default route;