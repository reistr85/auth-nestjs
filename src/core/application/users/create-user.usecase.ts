import { UserCreatedDto, UserCreateDto } from 'src/shared/dtos/users';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    createUserDto: UserCreateDto,
  ): Promise<{ user: UserCreatedDto }> {
    const user = await this.userRepository.save(createUserDto);
    return { user: new UserCreatedMapper().mapTo(user) };
  }
}
