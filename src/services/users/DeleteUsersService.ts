import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories';

import { Users } from '../../entities/Users';

class DeleteUsersService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne(id);

    if (!userAlreadyExists) {
      throw new Error('User not found!!');
    }

    await usersRepository
      .createQueryBuilder()
      .delete()
      .from(Users)
      .where('id = :id', { id })
      .execute();
  }
}

export { DeleteUsersService };