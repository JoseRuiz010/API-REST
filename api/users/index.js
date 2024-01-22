import express from 'express';
import { get } from '../../services/user.services.js';

const route = express.Router();

route.get('/', get);


export default route;