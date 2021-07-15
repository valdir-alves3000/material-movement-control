import { EntityRepository, Repository } from 'typeorm';
import { SupplyPoints } from '../entities';

@EntityRepository(SupplyPoints)
class SupplyPointsRepository extends Repository<SupplyPoints> {}

export {SupplyPointsRepository};