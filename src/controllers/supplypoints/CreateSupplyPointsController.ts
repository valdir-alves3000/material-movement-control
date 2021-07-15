import { Request, Response } from 'express';
import { CreateSupplyPointsService } from '../../services/supplypoints';

class CreateSupplyPointsController {
  async handle(req: Request, res: Response) {
    const { supply_point, product_id, } = req.body;

    const createSupplyPoint = new CreateSupplyPointsService();

    const supplyPoints = await createSupplyPoint.execute({
      supply_point,
      product_id,
    });

    return res.json(supplyPoints);
  }
}

export { CreateSupplyPointsController };