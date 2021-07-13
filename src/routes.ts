import { Router } from 'express';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import {
  ListUsersController,
  UpdateUserController,
  CreateUsersController,
  DeleteUsersController,
  AuthenticateUserController,
} from './controllers/users';

import {
  ListProductsController,
  UpdateProductsController,
  CreateProductsController,
  DeleteProductsController,
} from './controllers/products';

const routes = Router();

const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const createUsersController = new CreateUsersController();
const deleteUsersController = new DeleteUsersController();
const authenticateUserController = new AuthenticateUserController();

const listProductsController = new ListProductsController();
const updateProductsController = new UpdateProductsController();
const createProductsController = new CreateProductsController();
const deleteProductsController = new DeleteProductsController();

routes.get(
  '/users',
  ensureAuthenticate,
  listUsersController.handle);

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

routes.get(
  '/products',
  ensureAuthenticate,
  listProductsController.handle);

routes.post(
  '/products',
  ensureAuthenticate,
  ensureAdmin,
  createProductsController.handle);

routes.put(
  '/products/:id',
  ensureAuthenticate,
  updateProductsController.handle);

routes.delete(
  '/products/:id',
  ensureAuthenticate,
  deleteProductsController.handle);

routes.post('/login', authenticateUserController.handle);

export { routes };