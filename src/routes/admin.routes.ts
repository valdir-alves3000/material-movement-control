import { CheckAdminController } from "controllers/CheckAdminController";
import { Router } from "express";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

const adminRoutes = Router();

const checkAdminController = new CheckAdminController();

adminRoutes.get("/", ensureAuthenticate, checkAdminController.handle);

export { adminRoutes };
