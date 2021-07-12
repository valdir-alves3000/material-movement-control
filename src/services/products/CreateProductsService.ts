import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories';

interface IProductsRequest {
  material: string;
  status: string;
  locked: boolean;
  quantity: number;
  description: string;
  storage_location: string;
  created_by_user: string;
}

class CreateProductsService {
  async execute({
    material,
    status = 'receiver',
    locked = false,
    quantity,
    description,
    storage_location = 'recebimento',
    created_by_user,
  }: IProductsRequest) {
    const productsRepository = getCustomRepository(ProductsRepository);

    if (!material || !quantity || !description) {
      throw new Error('Product/Quantity/Description incorrect')
    }

    const product = productsRepository.create({
      material,
      description,
      storage_location,
      quantity,
      status,
      locked,
      created_by_user,
      updated_by_user: created_by_user     
    });

    await productsRepository.save(product);

    return product;
  }
}

export { CreateProductsService };
