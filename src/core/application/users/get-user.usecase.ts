import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserCreatedDto } from 'src/shared/dtos/users';

export class GetUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}
  public async execute(id: string): Promise<{ user: UserCreatedDto }> {
    const user = await this.userRepository.findOne({ id });
    return { user: new UserCreatedMapper().mapTo(user) };
  }
}
