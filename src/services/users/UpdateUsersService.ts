import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories';

import { Users } from '../../entities/Users';
import { hash } from 'bcryptjs';

interface IUserRequest {
  id: string;
  password?: string;
  name?: string;
  admin?: boolean;
}

class UpdateUsersService {
  async execute({ id, name, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne(id);

    if (!userAlreadyExists) {
      throw new Error('User not found!');
    }

    const passwordHash = password ? await hash(password, 8): null;

    await usersRepository
      .createQueryBuilder()
      .update(Users)
      .set({
        name: name || userAlreadyExists.name,
        admin: admin || userAlreadyExists.admin,
        password: passwordHash || userAlreadyExists.password
      })
      .where('id = :id', {
        id,
      })
      .execute();
  }
}

export { UpdateUsersService };