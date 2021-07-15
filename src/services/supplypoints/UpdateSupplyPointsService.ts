import { getCustomRepository } from 'typeorm';
import { SupplyPointsRepository } from '../../repositories';

import { SupplyPoints }from '../../entities';

interface ISupplyPointRequest {
  id: string;
  supply_point: string;
  product_id: string;
}

class UpdateSupplyPointsService {
  async execute({id, supply_point, product_id}: ISupplyPointRequest){
    const supplyPointsRepository = getCustomRepository(SupplyPointsRepository);

    const supplyPointAlreadyExists = await supplyPointsRepository.findOne(id);

    if(!supplyPointAlreadyExists){
      throw new Error('Supply Point not found!');
    }

    await supplyPointsRepository
      .createQueryBuilder()
      .update(SupplyPoints)
      .set({
        supply_point,
        product_id
      })
      .where('id = :id',{
        id
      })
      .execute();
  }
}


export { UpdateSupplyPointsService };