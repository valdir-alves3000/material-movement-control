import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../../repositories";

class ExpirationDateService {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);
    const product = await productsRepository.findOne(id);
    const data = {
      id: product.id,
      material: product.material,
      description: product.description,
      expiration_date: product.expiration_date,
      expiry_date_after_opening: product.expiry_date_after_opening,
    };

    return data;
  }
}

export { ExpirationDateService };
