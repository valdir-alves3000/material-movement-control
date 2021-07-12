import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import {
  ListUserController,
  UpdateUserController,
  CreateUsersController,
  AuthenticateUserController,
} from './controllers/users';

const routes = Router();

const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const createUsersController = new CreateUsersController();
const authenticateUserController = new AuthenticateUserController();

routes.get(
  '/users',
  ensureAuthenticate,
  listUserController.handle);

routes.put(
  '/users/:id',
  ensureAuthenticate,
  ensureAdmin,
  updateUserController.handle);

routes.post(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle);

routes.post('/login', authenticateUserController.handle);

export { routes };