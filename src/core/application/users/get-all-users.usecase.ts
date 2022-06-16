import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserCreatedDto } from 'src/shared/dtos/users';

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(): Promise<{ users: UserCreatedDto[] }> {
    const users: User[] = await this.userRepository.findAll();
    return {
      users: users.map(
        (user: User): UserCreatedDto => new UserCreatedMapper().mapTo(user),
      ),
    };
  }
}
