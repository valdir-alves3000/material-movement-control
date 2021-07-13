import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/products';

class UpdateProductsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { user_id } = req;

    const {
      material,
      description,
      storage_location,
      quantity,
      status,
      locked,
    } = req.body;

    const updateProductService = new UpdateProductService();

    await updateProductService.execute({
      id,
      material,
      description,
      storage_location,
      quantity,
      status,
      locked,
      user_id
    });

    return res.json({ message: 'Product Updated successfully!' })
  }
}

export { UpdateProductsController };