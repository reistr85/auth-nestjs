import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/users';
import { UserRepository } from 'src/data/type-orm/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  public async execute(
    createUserDto: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    const user = await this.userRepository.save(createUserDto);
    return { user: new UserCreateMapper().mapTo(user) };
  }
}
