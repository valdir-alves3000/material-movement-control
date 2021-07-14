import { Request, Response } from 'express';
import { UpdateStoragePointsService } from '../../services/storagepoints';

class UpdateStoragePointsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { product_id, locked } = req.body;

    const updateStoragePointsService = new UpdateStoragePointsService();

    await updateStoragePointsService.execute({
      id,
      product_id,
      locked
    });

    return res.json({ message: 'Storage Point Updated successfully!' })
  }
}

export { UpdateStoragePointsController };