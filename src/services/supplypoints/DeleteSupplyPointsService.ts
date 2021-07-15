import { getCustomRepository } from 'typeorm';
import { SupplyPointsRepository } from '../../repositories';

import { SupplyPoints } from '../../entities';

class DeleteSupplyPointsService {
  async execute(id: string) {
    const supplyPointsRepository = getCustomRepository(SupplyPointsRepository);

    const supplyPointAlreadyExists = await supplyPointsRepository.findOne(id);

    if (!supplyPointAlreadyExists) {
      throw new Error('Supply Point not found!');
    }

    await supplyPointsRepository
      .createQueryBuilder()
      .delete()
      .from(SupplyPoints)
      .where('id = :id', { id })
      .execute();
  }
}

export { DeleteSupplyPointsService };