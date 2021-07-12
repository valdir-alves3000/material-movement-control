import { Router } from 'express';
import { CreateUsersController } from './controllers/users';

const routes = Router();

const createUsersController =new CreateUsersController();

routes.post('/users', createUsersController.handle);

export { routes };