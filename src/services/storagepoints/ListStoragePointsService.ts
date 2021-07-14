import { getCustomRepository } from 'typeorm';
import { StoragePointsRepository } from '../../repositories';
import{ StoragePoints} from '../../entities';

class ListStoragePointsService {
  async execute(id: string) {
    const storagePointsRepository = getCustomRepository(StoragePointsRepository);

    if (id) {
      const storagePoint = await storagePointsRepository.findOne(
        id,
        {relations: ['productIdStorage']}
        );

      if (!storagePoint) {
        throw new Error('Storage Point Incorrect!')
      }

      return storagePoint;
    }

    const storagePoints = await storagePointsRepository.find();

    return storagePoints;
  }
}

export { ListStoragePointsService };