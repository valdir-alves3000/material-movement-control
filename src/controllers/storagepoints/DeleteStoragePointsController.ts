import { Request, Response } from 'express';
import { DeleteStoragePointsService } from '../../services/storagepoints';

class DeleteStoragePointsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteStoragePointsService = new DeleteStoragePointsService();

    await deleteStoragePointsService.execute(id);

    return res.json({ message: 'Storage Point deleted successfully!' });
  }
}

export { DeleteStoragePointsController };