import { FindConditions, FindOneOptions } from 'typeorm';
import { UserCreateDto, UserUpdateDto } from 'src/shared/dtos/users';
import { User } from '../entities/user.entity';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findOne(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
  ): Promise<User>;
  save(user: UserCreateDto): Promise<User>;
  update(id: string, user: UserUpdateDto): Promise<User>;
  remove(id: string): Promise<void>;
}
