import { Request, Response } from 'express';
import { UpdateSupplyPointsService } from '../../services/supplypoints';

class UpdateSupplyPointsController {
  async handle(req: Request, res: Response) {
    const {  supply_point, product_id } = req.body;
    const { id } = req.params;

    const updateSupplyPointsService = new UpdateSupplyPointsService();

    await updateSupplyPointsService.execute({
      id,
      supply_point,
      product_id
    });

    return res.json({message: 'Supply Point Updated successfully!'})
  }
}

export { UpdateSupplyPointsController };