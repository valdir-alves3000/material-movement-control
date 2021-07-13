import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories';

import { Products } from '../../entities/Products';

class DeleteProductsService {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productAlreadyExists = await productsRepository.findOne(id);

    if (!productAlreadyExists) {
      throw new Error('Product not found!!');
    }

    await productsRepository
      .createQueryBuilder()
      .delete()
      .from(Products)
      .where('id = :id', { id })
      .execute();
  }
}

export { DeleteProductsService };