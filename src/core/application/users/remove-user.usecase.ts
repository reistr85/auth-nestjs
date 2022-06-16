import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/core/domain/repositories/user.repository';

@Injectable()
export class RemoveUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(id: string): Promise<void> {
    await this.userRepository.remove(id);
  }
}
