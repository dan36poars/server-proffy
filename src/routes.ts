import express, { response } from 'express';
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();

// controllers
const classController = new ClassesController();
const connectionsController = new ConnectionsController();

// routes
routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;