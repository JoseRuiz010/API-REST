import express from 'express';
import { userController } from '../../controller/users.controller.js';

const route = express.Router();

route.get('/', userController.getAll);
route.get('/:id', userController.get);


export default route;