import { Request, Response } from 'express';
import { UpdateUsersService } from '../../services/users';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, admin, password } = req.body;
    const { id } = req.params;

    const updateUsersService = new UpdateUsersService();

    await updateUsersService.execute({
      id,
      name,
      admin,
      password,
    });

    return res.json({message: 'User Updated successfully!'})
  }
}

export { UpdateUserController };