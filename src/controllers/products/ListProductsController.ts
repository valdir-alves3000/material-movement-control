import { Request, Response } from 'express';
import { ListProductsService } from '../../services/products';

class ListProductsController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute(id);

    return res.json(products);
  }
}

export { ListProductsController };