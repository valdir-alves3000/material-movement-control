import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories';

class ListProductsService {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    if (id) {
      const product = await productsRepository.findOne(
        id,
        { relations: ['updatedByUser'] }
      );

      if (!product) {
        throw new Error('Product not Found')
      }

      return product;
    }

    const products = await productsRepository.find();

    return products;
  }
}

export { ListProductsService };