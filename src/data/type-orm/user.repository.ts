import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto, UserUpdateDto } from 'src/shared/dtos/users';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async save(createUserDto: UserCreateDto): Promise<User> {
    const user = await this.userRepository.create(
      new UserCreateMapper().mapFrom(createUserDto),
    );
    return await this.userRepository.save(user);
  }

  public async findOne(id: string): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Register not found');
    }
  }

  public async update(id: string, userUpdateDto: UserUpdateDto): Promise<User> {
    let user = await this.findOne(id);
    delete user.type_user;

    user = await this.userRepository.merge(user, userUpdateDto);
    return await this.userRepository.save(user);
  }

  public async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.softDelete(user);
  }
}
