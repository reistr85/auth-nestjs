import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreatedDto } from 'src/shared/dtos/user/user-created.dto';
import { UserCreatedMapper } from '../../core/domain/mappers/users/user-created.mapper';

@Injectable()
export class GetAllUsersUseCase {
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public execute(): UserCreatedDto[] {
    return this.repository
      .getAll()
      .map((user) => this.userCreatedMapper.mapTo(user));
  }
}
