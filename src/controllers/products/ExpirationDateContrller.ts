import { Request, Response } from "express";
import { ExpirationDateService } from "../../services/products/ExpirationDateService";

class ExpirationDateController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const expirationDateService = new ExpirationDateService();

    const product = await expirationDateService.execute(id);

    return res.json(product);
  }
}

export { ExpirationDateController };
