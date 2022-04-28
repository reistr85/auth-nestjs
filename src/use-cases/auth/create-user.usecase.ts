import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/core/repositories/user.repository';
import { UserCreateMapper } from 'src/core/domain/mappers/auth/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly repository: UserRepository,
    private readonly userCreateMapper: UserCreateMapper,
  ) {}

  public async execute(userDto: UserCreateDto): Promise<UserCreateDto> {
    const user = this.userCreateMapper.mapFrom(userDto);
    user.password = await bcrypt.hash(user.password, 10);

    const userCreated = this.repository.create(user);
    return this.userCreateMapper.mapTo(userCreated);
  }
}
