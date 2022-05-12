import { AuthenticateUserController } from "controllers/users";
import { Router } from "express";

const loginRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

loginRoutes.post("/", authenticateUserController.handle);

export { loginRoutes };
