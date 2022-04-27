import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { UserEntity } from 'src/core/domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  private userCreateMapper: UserCreateMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
  }

  public async execute(user: UserCreateDto): Promise<UserEntity> {
    const entity = this.userCreateMapper.mapFrom(user);
    entity.password = await bcrypt.hash(user.password, 10);

    return this.repository.create(entity);
  }
}
