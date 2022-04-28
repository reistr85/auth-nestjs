import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/core/repositories/user.repository';
import { SessionCreateDto } from 'src/shared/dtos/auth/session-create.dto';
import { SessionCreatedDto } from 'src/shared/dtos/auth/session-created.dto';

@Injectable()
export class LoginUseCase {
  constructor(private readonly repository: UserRepository) {}

  public async execute(
    sessionData: SessionCreateDto,
  ): Promise<SessionCreatedDto> {
    const user = this.repository.findByEmail(sessionData.email);

    if (!user) throw new UnauthorizedException('Unauthorized');

    const isMatch = await bcrypt.compare(sessionData.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Unauthorized');

    const session = new SessionCreatedDto();
    session.user = user;
    session.token = 'asd65as4d.ASDas1d351a3s51das.ass654';

    return session;
  }
}
