import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/user';
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
}
