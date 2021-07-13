import { EntityRepository, Repository } from 'typeorm';
import { StoragePoints } from '../entities';

@EntityRepository(StoragePoints)
class StoragePointsRepository extends Repository<StoragePoints> {}

export {StoragePointsRepository};