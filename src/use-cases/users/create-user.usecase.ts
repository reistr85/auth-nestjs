import { Injectable } from '@nestjs/common';
import { UserCreatedDto, UserCreateDto } from 'src/shared/dtos/users';
import { UserRepository } from 'src/data/type-orm/user.repository';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    createUserDto: UserCreateDto,
  ): Promise<{ user: UserCreatedDto }> {
    const user = await this.userRepository.save(createUserDto);
    return { user: new UserCreatedMapper().mapTo(user) };
  }
}
