import {
  AuthenticateUserController,
  CreateUsersController,
  DeleteUsersController,
  ListUsersController,
  UpdateUserController,
} from "controllers/users";
import { Router } from "express";

import { ensureAdmin } from "middlewares/ensureAdmin";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

const usersRoutes = Router();

const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const createUsersController = new CreateUsersController();
const deleteUsersController = new DeleteUsersController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.get(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  listUsersController.handle
);

usersRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createUsersController.handle
);

usersRoutes.put(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  updateUserController.handle
);

usersRoutes.delete(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  deleteUsersController.handle
);

export { usersRoutes };
