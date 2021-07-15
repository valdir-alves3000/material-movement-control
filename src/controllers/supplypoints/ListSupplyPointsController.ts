import { Request, Response } from 'express';
import { ListSupplyPointsService } from '../../services/supplypoints';

class ListSupplyPointsController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const listSupplyPointsService = new ListSupplyPointsService();

    const supplyPoints = await listSupplyPointsService.execute(id);

    return res.json(supplyPoints);
  }
}

export { ListSupplyPointsController };