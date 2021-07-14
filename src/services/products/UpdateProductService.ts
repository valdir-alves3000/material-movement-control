import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories';
import { UsersRepository } from '../../repositories';

import { Products } from '../../entities/Products';

interface IUserRequest {
  id: string;
  material: string;
  status: string;
  locked: boolean;
  quantity: number;
  description: string;
  storage_location: string;
  user_id: string;
}

class UpdateProductService {
  async execute({
    id,
    material,
    description,
    storage_location,
    quantity,
    status,
    locked,
    user_id
  }: IUserRequest) {
    const productsRepository = getCustomRepository(ProductsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const productAlreadyExists = await productsRepository.findOne(id);
    const { admin } = await usersRepository.findOne(user_id);
    
    if (!productAlreadyExists) {
      throw new Error('Product not found!');
    }
    
    if (!admin) {
      await productsRepository
        .createQueryBuilder()
        .update(Products)
        .set({
          storage_location: storage_location || productAlreadyExists.storage_location,
          quantity: quantity || productAlreadyExists.quantity,
          status: status || productAlreadyExists.status,
          updated_by_user: user_id
        })
        .where('id = :id', { id })
        .execute();

      return;
    }

    const result = await productsRepository
      .createQueryBuilder()
      .update(Products)
      .set({
        material: material || productAlreadyExists.material,
        description: description || productAlreadyExists.description,
        storage_location: storage_location || productAlreadyExists.storage_location,
        quantity: quantity || productAlreadyExists.quantity,
        status: status || productAlreadyExists.status,
        locked: locked || productAlreadyExists.locked,
        updated_by_user: user_id
      })
      .where('id = :id', { id })
      .execute();

    return result;
  }
}

export { UpdateProductService };