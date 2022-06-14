import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/data/type-orm/user.repository';

@Injectable()
export class ValidateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(email: string, password: string) {
    let user: User;

    try {
      user = await this.userRepository.findOne({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return user;
  }
}
