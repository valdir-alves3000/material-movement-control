import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import {
  ListUserController,
  CreateUsersController,
  AuthenticateUserController,
} from './controllers/users';

const routes = Router();

const listUserController = new ListUserController();
const createUsersController = new CreateUsersController();
const authenticateUserController = new AuthenticateUserController();

routes.get(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  listUserController.handle);

routes.post(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle);

routes.post('/login', authenticateUserController.handle);

export { routes };