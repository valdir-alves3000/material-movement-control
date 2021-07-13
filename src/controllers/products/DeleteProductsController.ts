import { Request, Response } from 'express';
import { DeleteProductsService } from '../../services/products';

class DeleteProductsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductsService = new DeleteProductsService();

    await deleteProductsService.execute(id);

    return res.json({ message: 'Product deleted successfully!' });
  }
}

export { DeleteProductsController };