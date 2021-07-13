import { Request, Response } from 'express';
import { ListUsersService } from '../../services/users';

class ListUsersController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    
    const id = req.query.id as string;

    const listUsersService = new ListUsersService();
    const users = await listUsersService.execute({ user_id, id });

    return res.json(users);
  }
}

export { ListUsersController };