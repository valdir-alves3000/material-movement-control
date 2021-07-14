import { getCustomRepository } from 'typeorm';
import { StoragePointsRepository } from '../../repositories';

import { StoragePoints } from '../../entities/StoragePoints';

class DeleteStoragePointsService {
  async execute(id: string) {
    const storagePointsRepository = getCustomRepository(StoragePointsRepository);

    const storagePointAlreadyExists = await storagePointsRepository.findOne(id);

    if (!storagePointAlreadyExists) {
      throw new Error('Storage Point not found!!');
    }

    const result =  await storagePointsRepository
      .createQueryBuilder()
      .delete()
      .from(StoragePoints)
      .where('id = :id', { id })
      .execute();

    return result;
  }
}

export { DeleteStoragePointsService };