import { Injectable } from '@nestjs/common';
import { UserCreatedMapper } from 'src/core/domain/mappers/auth/user-created.mapper';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreatedDto } from 'src/shared/dtos/auth/user-created.dto';

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
