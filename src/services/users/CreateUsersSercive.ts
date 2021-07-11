import { getCustomRepository } from 'typeorm';
import { UsersRepository } from  '../../repositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
  password: string;
  name: string;
  admin?: boolean;
}

class CreateUsersService {
  async execute({ name, admin = false, password }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepository);

    if (!name) {
      throw new Error('User incorrect!');
    }

    if (!password) {
      throw new Error('Password incorrect!');
    }

    const userAlreadyExists = await usersRepository.findOne({ name });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;

  }
}

export { CreateUsersService };