import { Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenDto } from 'src/shared/dtos/auth/token.dto';
import { HttpCodeEnum } from 'src/shared/enums/http-coded.enum';
import { LoginUseCase } from 'src/use-cases/auth/login.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpCodeEnum.SUCCESS)
  async login(@Req() req): Promise<TokenDto> {
    const { id, email } = req.user;
    const role = req.user.role.label;
    return this.loginUseCase.execute({ id, email, role });
  }
}
