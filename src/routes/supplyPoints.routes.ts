import {
  CreateSupplyPointsController,
  DeleteSupplyPointsController,
  ListSupplyPointsController,
  UpdateSupplyPointsController,
} from "controllers/supplypoints";
import { Router } from "express";
import { ensureAdmin } from "middlewares/ensureAdmin";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

const supplyPointsRoutes = Router();

const listSupplyPointsController = new ListSupplyPointsController();
const updateSupplyPointsController = new UpdateSupplyPointsController();
const createSupplyPointsController = new CreateSupplyPointsController();
const deleteSupplyPointsController = new DeleteSupplyPointsController();

supplyPointsRoutes.get(
  "/",
  ensureAuthenticate,
  listSupplyPointsController.handle
);

supplyPointsRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createSupplyPointsController.handle
);

supplyPointsRoutes.put(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  updateSupplyPointsController.handle
);

supplyPointsRoutes.delete(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  deleteSupplyPointsController.handle
);

export { supplyPointsRoutes };
