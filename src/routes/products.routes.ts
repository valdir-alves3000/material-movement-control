import {
  CreateProductsController,
  DeleteProductsController,
  ExpirationDateController,
  ListProductsController,
  UpdateProductsController,
} from "controllers/products";
import { Router } from "express";
import { ensureAdmin } from "middlewares/ensureAdmin";
import { ensureAuthenticate } from "middlewares/ensureAuthenticate";

const productsRoutes = Router();

const listProductsController = new ListProductsController();
const updateProductsController = new UpdateProductsController();
const createProductsController = new CreateProductsController();
const deleteProductsController = new DeleteProductsController();
const expirationDateController = new ExpirationDateController();

productsRoutes.post(
  "/",
  ensureAuthenticate,
  ensureAdmin,
  createProductsController.handle
);

productsRoutes.get("/", ensureAuthenticate, listProductsController.handle);

productsRoutes.put("/:id", ensureAuthenticate, updateProductsController.handle);

productsRoutes.delete(
  "/:id",
  ensureAuthenticate,
  ensureAdmin,
  deleteProductsController.handle
);

productsRoutes.get("/expiration_date/:id", expirationDateController.handle);

export { productsRoutes };
