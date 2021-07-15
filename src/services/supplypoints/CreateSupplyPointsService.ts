import { getCustomRepository } from 'typeorm';
import { SupplyPointsRepository } from '../../repositories';

interface ISupplyPointRequest {
  supply_point: string;
  product_id: string;
}

class CreateSupplyPointsService {
  async execute({ supply_point, product_id }: ISupplyPointRequest) {
    const supplyPointsRepository = getCustomRepository(SupplyPointsRepository);

    if (!supply_point ) {
      throw new Error('Storage-Point or product incorrect!');
    }

    const location = supplyPointsRepository.create({
      supply_point,
      product_id,

    });

    await supplyPointsRepository.save(location);

    return location;
  }
}

export { CreateSupplyPointsService };