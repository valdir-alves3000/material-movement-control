import {Request, Response} from 'express';
import {ListStoragePointsService} from '../../services/storagepoints';

class ListStoragePointsController {
  async handle(req: Request, res: Response){
    const id = req.query.id as string;

    const listStoragePointsService = new ListStoragePointsService();

    const storagePoint = await listStoragePointsService.execute(id);

    return res.json(storagePoint);
  }
}

export {ListStoragePointsController};