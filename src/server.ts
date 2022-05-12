import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { adminRoutes } from "routes/admin.routes";
import { loginRoutes } from "routes/login.routes";
import { productsRoutes } from "routes/products.routes";
import { storagePointsRoutes } from "routes/storagePoints.routes";
import { supplyPointsRoutes } from "routes/supplyPoints.routes";
import { usersRoutes } from "routes/users.routes";
import "./database";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);
app.use("/supply-points", supplyPointsRoutes);
app.use("/storage-points", storagePointsRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      if (err.message === "Unauthorized user!") {
        return response.status(401).json({
          error: err.message,
        });
      }
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error!",
    });
  }
);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`);
});
