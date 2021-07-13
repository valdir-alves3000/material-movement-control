import { Request, Response } from 'express';
import { CreateStoragePointsService } from '../../services/storagepoints';

class CreateStoragePointsController {
  async handle(req: Request, res: Response) {
    const { storage_point, locked, product_id } = req.body;

    const createStoragePointsService = new CreateStoragePointsService();

    const location = await createStoragePointsService.execute({
      storage_point,
      locked,
      product_id
    });

    return res.json(location);
  }
}

export { CreateStoragePointsController };