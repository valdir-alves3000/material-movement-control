import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../../repositories";

interface IProductsRequest {
  material: string;
  status: string;
  locked: boolean;
  quantity: number;
  description: string;
  storage_location: string;
  created_by_user: string;
  expiration_date: string;
  expiry_date_after_opening: string;
}

class CreateProductsService {
  async execute({
    material,
    status = "receiver",
    locked = false,
    quantity,
    description,
    storage_location = "receivement",
    created_by_user,
    expiration_date,
    expiry_date_after_opening,
  }: IProductsRequest) {
    const productsRepository = getCustomRepository(ProductsRepository);

    if (!expiration_date || !expiry_date_after_opening) {
      throw new Error("Expiration date is mandatory");
    }

    if (!material || !quantity || !description) {
      throw new Error("Product/Quantity/Description incorrect");
    }

    const dateFormat = (date: string) =>
      new Date(date + " 00:00").toDateString();

    const product = productsRepository.create({
      material,
      description,
      storage_location,
      quantity,
      status,
      locked,
      created_by_user,
      updated_by_user: created_by_user,
      expiration_date: dateFormat(expiration_date),
      expiry_date_after_opening,
    });

    await productsRepository.save(product);

    return product;
  }
}

export { CreateProductsService };
