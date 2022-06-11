import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/data/type-orm/user.repository';

@Injectable()
export class RemoveUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(id: string): Promise<void> {
    await this.userRepository.remove(id);
  }
}
