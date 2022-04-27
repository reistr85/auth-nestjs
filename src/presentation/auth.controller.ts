import { Body, Controller, Post } from '@nestjs/common';
import { SessionCreateDto } from 'src/shared/dtos/auth/session-create.dto';
import { SessionCreatedDto } from 'src/shared/dtos/auth/session-created.dto';
import { LoginUseCase } from 'src/use-cases/auth/login.usecase';

@Controller('/auth')
export class AuthController {
  constructor(private loginUserCase: LoginUseCase) {}

  @Post('login')
  public login(
    @Body() sessionData: SessionCreateDto,
  ): Promise<SessionCreatedDto> {
    return this.loginUserCase.execute(sessionData);
  }
}
