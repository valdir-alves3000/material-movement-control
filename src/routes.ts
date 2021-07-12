import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import {
  AuthenticateUserController,
  CreateUsersController,
} from './controllers/users';

const routes = Router();

const createUsersController = new CreateUsersController();
const authenticateUserController = new AuthenticateUserController();

routes.post(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle);

routes.post('/login', authenticateUserController.handle);

export { routes };