import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/core/domain/entities/user.entity';
import { MessagesHelper } from 'src/shared/helpers/messages.helper';
import { ValidateUserUseCase } from 'src/use-cases/auth/validate-user.usecase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly validateUserUseCase: ValidateUserUseCase) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.validateUserUseCase.execute(email, password);
    if (!user) {
      throw new UnauthorizedException(MessagesHelper.EMAIL_OR_PASSWORD_INVALID);
    }

    return user;
  }
}
