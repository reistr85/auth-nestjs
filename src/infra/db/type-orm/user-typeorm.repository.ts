import { NotFoundException } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserCreateDto, UserUpdateDto } from 'src/shared/dtos/users';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';

export class UserTypeOrmRepository implements UserRepository {
  constructor(private readonly userRepository: Repository<User>) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async save(createUserDto: UserCreateDto): Promise<User> {
    const user = await this.userRepository.create(
      new UserCreateMapper().mapFrom(createUserDto),
    );
    return await this.userRepository.save(user);
  }

  public async findOne(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>,
  ): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException('Register not found');
    }
  }

  public async update(id: string, userUpdateDto: UserUpdateDto): Promise<User> {
    // let user = await this.findOne({ id });
    // delete user.role;
    // user = await this.userRepository.merge(user, userUpdateDto);
    // return await this.userRepository.save(user);
    return null;
  }

  public async remove(id: string): Promise<void> {
    const user = await this.findOne({ id });
    await this.userRepository.softDelete(user);
  }
}
