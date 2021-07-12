import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories';
import { classToPlain } from 'class-transformer';

interface IDataRequest {
  id: string;
  user_id: string;
}

class ListUsersService {
  async execute({ user_id, id }: IDataRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    const { admin } = await usersRepository.findOne(user_id);

    if (id) {
      const user = await usersRepository.findOne(id);

      if (!user) {
        throw new Error('User not found!')
      }

      if (admin) {
        return user;
      }

      return classToPlain(user);
    }

    const users = await usersRepository.find();

    if (admin) {
      return users;
    }

    return classToPlain(users);
  }
}

export { ListUsersService };