import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories";

class CheckAdminController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;

    const usersRepository = getCustomRepository(UsersRepository);

    const { admin } = await usersRepository.findOne(user_id);

    return res.json({ admin });
  }
}

export { CheckAdminController };
