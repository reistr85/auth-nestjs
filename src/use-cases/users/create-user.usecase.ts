import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreateMapper } from 'src/core/domain/mappers/users/user-create.mapper';
import { UserCreateDto } from 'src/shared/dtos/user';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async execute(
    createUserDto: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    const user = await this.userRepository.create(
      new UserCreateMapper().mapFrom(createUserDto),
    );
    console.log(user);
    await this.userRepository.save(user);
    return { user: new UserCreateMapper().mapTo(user) };
  }
}
