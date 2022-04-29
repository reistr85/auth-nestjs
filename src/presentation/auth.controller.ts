import { Body, Controller, Post } from '@nestjs/common';
import { SessionCreateDto } from 'src/shared/dtos/auth/session-create.dto';
import { SessionCreatedDto } from 'src/shared/dtos/auth/session-created.dto';
import { LoginUseCase } from 'src/use-cases/auth/login.usecase';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('/auth')
export class AuthController {
  constructor(private loginUserCase: LoginUseCase) {}

  @Post('login')
  @ApiBody({ type: SessionCreateDto })
  @ApiCreatedResponse({ type: SessionCreatedDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  public login(
    @Body() sessionData: SessionCreateDto,
  ): Promise<SessionCreatedDto> {
    return this.loginUserCase.execute(sessionData);
  }
}
