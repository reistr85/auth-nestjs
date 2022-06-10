import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/user';
import { Repository } from 'typeorm';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  public async execute(
    createUserDto: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    const user = await this.userRepository.create(
      new UserCreateMapper().mapFrom(createUserDto),
    );
    await this.userRepository.save(user);
    return { user: new UserCreateMapper().mapTo(user) };
  }
}
