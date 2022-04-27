import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/repositories/user.repository';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  public execute(): UserEntity[] {
    return this.repository.getAll();
  }
}
