import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import {
  ListUserController,
  UpdateUserController,
  CreateUsersController,
  DeleteUsersController,
  AuthenticateUserController,
} from './controllers/users';

import {
  CreateProductsController
} from './controllers/products';

const routes = Router();

const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const createUsersController = new CreateUsersController();
const deleteUsersController = new DeleteUsersController();
const authenticateUserController = new AuthenticateUserController();

const createProductsController = new CreateProductsController();

routes.get(
  '/users',
  ensureAuthenticate,
  listUserController.handle);

routes.post(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle);

routes.put(
  '/users/:id',
  ensureAuthenticate,
  ensureAdmin,
  updateUserController.handle);

routes.delete(
  '/users/:id',
  ensureAuthenticate,
  ensureAdmin,
  deleteUsersController.handle);

routes.post(
  '/products',
  ensureAuthenticate,
  ensureAdmin,
  createProductsController.handle);

routes.post('/login', authenticateUserController.handle);

export { routes };