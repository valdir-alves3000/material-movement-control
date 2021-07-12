import { Request, Response } from 'express';
import { CreateUsersService } from '../../services/users';

class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { name, admin, password } = req.body;

    const createUsersSercive = new CreateUsersService();

    const user = await createUsersSercive.execute({
      name,
      admin,
      password,
    });

    return res.json(user);
  }
}

export { CreateUsersController };