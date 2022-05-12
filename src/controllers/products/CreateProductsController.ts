import { Request, Response } from "express";
import { CreateProductsService } from "../../services/products";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const {
      material,
      status,
      locked,
      quantity,
      description,
      storage_location,
      created_by_user = user_id,
      expiration_date,
      expiry_date_after_opening,
    } = req.body;

    const createProductsService = new CreateProductsService();

    const products = await createProductsService.execute({
      material,
      status,
      locked,
      quantity,
      description,
      storage_location,
      created_by_user,
      expiration_date,
      expiry_date_after_opening,
    });

    return res.json(products);
  }
}

export { CreateProductsController };
