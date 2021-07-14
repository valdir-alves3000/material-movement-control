import { getCustomRepository } from 'typeorm';
import { StoragePointsRepository } from '../../repositories';

import { StoragePoints } from '../../entities';

interface IStoragePointsRequest {
  id: string;
  locked: boolean;
  product_id: string;
}

class UpdateStoragePointsService {
  async execute({ id, product_id, locked }: IStoragePointsRequest) {
    const storagePointsRepository = getCustomRepository(StoragePointsRepository);

    const storagePointAlreadyExists = await storagePointsRepository.findOne(id);

    if (!storagePointAlreadyExists) {
      throw new Error('Storage Point not found!');
    }

    const result = await storagePointsRepository
      .createQueryBuilder()
      .update(StoragePoints)
      .set({
        product_id: product_id || storagePointAlreadyExists.product_id,
        locked: locked || storagePointAlreadyExists.locked
      })
      .where('id = :id', {
        id,
      })
      .execute();

    return result;
  }
}

export { UpdateStoragePointsService };