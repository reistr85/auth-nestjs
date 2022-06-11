import { Injectable } from '@nestjs/common';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserCreatedDto } from 'src/shared/dtos/user';
import { UserRepository } from 'src/data/type-orm/user.repository';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(): Promise<{ users: UserCreatedDto[] }> {
    const users = await this.userRepository.getAll();
    return { users: users.map((user) => new UserCreatedMapper().mapTo(user)) };
  }
}
