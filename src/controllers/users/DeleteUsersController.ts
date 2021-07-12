import { Request, Response } from 'express';
import { DeleteUsersService } from '../../services/users';

class DeleteUsersController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUsersService = new DeleteUsersService();

    await deleteUsersService.execute(id);

    return res.json({message: 'User deleted successfully!'});
  }
}

export { DeleteUsersController };