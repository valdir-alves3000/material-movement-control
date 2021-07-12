import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateResquest {
  name: string;
  password: string
}

class AuthenticateUserService {
  async execute({ name, password }: IAuthenticateResquest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ name });

    if (!user) {
      throw new Error('User/Password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('User/Password incorrect!');
    }

    const token = sign(
      {
        name: user.name,
      },
      process.env.HASH,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}

export { AuthenticateUserService };