import { getCustomRepository } from 'typeorm';
import { StoragePointsRepository } from '../../repositories';

interface IStoragePointsRequest {
  storage_point: string;
  locked: boolean;
  product_id: string;
}

class CreateStoragePointsService {
  async execute({ storage_point, locked = false, product_id }: IStoragePointsRequest) {

    const storagePointsRepository = getCustomRepository(StoragePointsRepository);

    if(!storage_point){
      throw new Error('Storage Point incorrect!')
    }

    const location = storagePointsRepository.create({
      storage_point,
      locked,
      product_id
    });

    await storagePointsRepository.save(location);

    return location;
  }
}

export { CreateStoragePointsService };