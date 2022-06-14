import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from 'src/shared/dtos/auth/login-user.dto';
import { TokenDto } from 'src/shared/dtos/auth/token.dto';
import { HttpCodeEnum } from 'src/shared/enums/http-coded.enumn';
import { LoginUseCase } from 'src/use-cases/auth/login.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpCodeEnum.SUCCESS)
  async login(@Req() req: LoginUserDto): Promise<TokenDto> {
    return this.loginUseCase.execute(req);
  }
}
