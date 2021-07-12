import { Request, Response } from 'express';
import { AuthenticateUserService } from '../../services/users';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { name, password } = req.body;
    
    const authenticateUserService = new AuthenticateUserService();
  
    const token = await authenticateUserService.execute({
      name,
      password
    });

    return res.json(token);
  }
}

export { AuthenticateUserController };