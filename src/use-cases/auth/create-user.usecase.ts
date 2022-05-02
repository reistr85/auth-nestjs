import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreateDto } from 'src/shared/dtos/user/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user/user-created.dto';
import { UserCreateMapper } from '../../core/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from '../../core/domain/mappers/users/user-created.mapper';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly userCreateMapper: UserCreateMapper,
    private readonly userCreatedMapper: UserCreatedMapper,
  ) {}

  public async execute(userDto: UserCreateDto): Promise<UserCreatedDto> {
    const user = this.userCreateMapper.mapFrom(userDto);
    user.password = await bcrypt.hash(user.password, 10);

    const userCreated = this.repository.create(user);
    return this.userCreatedMapper.mapTo(userCreated);
  }
}
