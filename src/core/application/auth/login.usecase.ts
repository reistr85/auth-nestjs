import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/shared/dtos/auth/login-user.dto';

export class LoginUseCase {
  constructor(private readonly jwtService: JwtService) {}

  public async execute(loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const payload = {
      sub: loginUserDto.id,
      email: loginUserDto.email,
      role: loginUserDto.role,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
