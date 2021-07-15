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

import {
  ListStoragePointsController,
  UpdateStoragePointsController,
  CreateStoragePointsController,
  DeleteStoragePointsController,
} from './controllers/storagepoints';

import {
  ListSupplyPointsController,
  UpdateSupplyPointsController,
  CreateSupplyPointsController,
  DeleteSupplyPointsController,
} from './controllers/supplypoints';

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

const listStoragePointsController = new ListStoragePointsController();
const updateStoragePointsController = new UpdateStoragePointsController();
const createStoragePointsController = new CreateStoragePointsController();
const deleteStoragePointsController = new DeleteStoragePointsController();

const listSupplyPointsController = new ListSupplyPointsController();
const updateSupplyPointsController = new UpdateSupplyPointsController();
const createSupplyPointsController = new CreateSupplyPointsController();
const deleteSupplyPointsController = new DeleteSupplyPointsController();

routes.post('/login', authenticateUserController.handle);

routes.get(
  '/users',
  ensureAuthenticate,
  listUsersController.handle
);

routes.post(
  '/users',
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle
);

routes.put(
  '/users/:id',
  ensureAuthenticate,
  ensureAdmin,
  updateUserController.handle
);

routes.delete(
  '/users/:id',
  ensureAuthenticate,
  ensureAdmin,
  deleteUsersController.handle
);

routes.post(
  '/products',
  ensureAuthenticate,
  ensureAdmin,
  createProductsController.handle
);

routes.get(
  '/products',
  ensureAuthenticate,
  listProductsController.handle
);

routes.post(
  '/products',
  ensureAuthenticate,
  createProductsController.handle
);

routes.put(
  '/products/:id',
  ensureAuthenticate,
  updateProductsController.handle
);

routes.delete(
  '/products/:id',
  ensureAuthenticate,
  ensureAdmin,
  deleteProductsController.handle
);

routes.get(
  '/storage-points',
  ensureAuthenticate,
  listStoragePointsController.handle
);

routes.post(
  '/storage-points',
  ensureAuthenticate,
  ensureAdmin,
  createStoragePointsController.handle
);

routes.put(
  '/storage-points/:id',
  ensureAuthenticate,
  ensureAdmin,
  updateStoragePointsController.handle
);

routes.delete(
  '/storage-points/:id',
  ensureAuthenticate,
  ensureAdmin,
  deleteStoragePointsController.handle
);

routes.get(
  '/supply-points',
  ensureAuthenticate,
  listSupplyPointsController.handle
);

routes.post(
  '/supply-points',
  ensureAuthenticate,
  ensureAdmin,
  createSupplyPointsController.handle
);

routes.put(
  '/supply-points/:id',
  ensureAuthenticate,
  ensureAdmin,
  updateSupplyPointsController.handle
);

routes.delete(
  '/supply-points/:id',
  ensureAuthenticate,
  ensureAdmin,
  deleteSupplyPointsController.handle
);

export { routes };