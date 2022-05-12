import {
  CreateStoragePointsController,
  DeleteStoragePointsController,
  ListStoragePointsController,
  UpdateStoragePointsController,
} from "controllers/storagepoints";
import { Router } from "express";
import { ensureAdmin } from "middlewares/ensureAdmin";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

const storagePointsRoutes = Router();

const listStoragePointsController = new ListStoragePointsController();
const updateStoragePointsController = new UpdateStoragePointsController();
const createStoragePointsController = new CreateStoragePointsController();
const deleteStoragePointsController = new DeleteStoragePointsController();

storagePointsRoutes.get(
  "/",
  ensureAuthenticate,
  listStoragePointsController.handle
);

storagePointsRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createStoragePointsController.handle
);

storagePointsRoutes.put(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  updateStoragePointsController.handle
);

storagePointsRoutes.delete(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  deleteStoragePointsController.handle
);

export { storagePointsRoutes };
