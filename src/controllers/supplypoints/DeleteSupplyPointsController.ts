import { Request, Response } from 'express';
import { DeleteSupplyPointsService } from '../../services/supplypoints';

class DeleteSupplyPointsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteSupplyPointsService = new DeleteSupplyPointsService();

    await deleteSupplyPointsService.execute(id);

    return res.json({ message: 'Supply Point deleted successfully!' });
  }
}

export { DeleteSupplyPointsController };