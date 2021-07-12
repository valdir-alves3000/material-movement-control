import { Request, Response } from 'express';
import { CreateProductsService } from '../../services/products';

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
    } = req.body;
    
    const createProductsService = new CreateProductsService();

    const products = await createProductsService.execute({
      material,
      status,
      locked,
      quantity,
      description,
      storage_location,
      created_by_user
    });

    return res.json(products);
  }
}

export { CreateProductsController };