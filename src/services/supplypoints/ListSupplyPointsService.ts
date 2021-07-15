import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { SupplyPointsRepository } from '../../repositories';


class ListSupplyPointsService {
  async execute(id: string) {
    const supplyPointsRepository = getCustomRepository(SupplyPointsRepository);

    if (id) {
      const supplyPoint = await supplyPointsRepository.findOne(
        id,
        {
          relations: ['productIdSupplyPoint'],
          select: ['supply_point']
        });

      if (!supplyPoint) {
        throw new Error('Supply Point Incorrect!')
      }

      return classToPlain(supplyPoint);
    }

    const supplyPoints = await supplyPointsRepository.find();

    return supplyPoints;
  }
}

export { ListSupplyPointsService };