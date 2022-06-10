import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserCreatedDto } from 'src/shared/dtos/user';

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async execute(): Promise<{ users: UserCreatedDto[] }> {
    const users = await this.userRepository.find();
    return { users: users.map((user) => new UserCreatedMapper().mapTo(user)) };
  }
}
