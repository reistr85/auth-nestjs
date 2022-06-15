import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.modules';
import { ValidateUserUseCase } from 'src/use-cases/auth/validate-user.usecase';
import { LocalStrategy } from './strategies/local.strategy';
import { LoginUseCase } from 'src/use-cases/auth/login.usecase';
import { AuthController } from 'src/presentation/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [ValidateUserUseCase, LoginUseCase, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
