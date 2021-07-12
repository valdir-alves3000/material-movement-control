import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { UsersRepository } from '../repositories';

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;

  const usersRepository =  getCustomRepository(UsersRepository);

  const { admin } = await usersRepository.findOne(user_id);

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "User unauthorized!"
  });
}