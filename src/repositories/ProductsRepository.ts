import { EntityRepository, Repository } from 'typeorm';
import { Products } from '../entities';

@EntityRepository(Products)
class ProductsRepository extends Repository<Products> {}

export {ProductsRepository};