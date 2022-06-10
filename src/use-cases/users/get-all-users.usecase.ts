import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserCreatedDto } from 'src/shared/dtos/user';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  public async execute(): Promise<{ users: UserCreatedDto[] }> {
    const users = await this.userRepository.find();
    return { users: users.map((user) => new UserCreatedMapper().mapTo(user)) };
  }
}
