import { Injectable } from '@nestjs/common';
import { UserCreatedMapper } from 'src/core/domain/mappers/users/user-created.mapper';
import { UserRepository } from 'src/data/type-orm/user.repository';
import { UserCreatedDto, UserUpdateDto } from 'src/shared/dtos/users';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(
    id: string,
    userUpdateDto: UserUpdateDto,
  ): Promise<{ user: UserCreatedDto }> {
    const user = await this.userRepository.update(id, userUpdateDto);
    return { user: new UserCreatedMapper().mapTo(user) };
  }
}
