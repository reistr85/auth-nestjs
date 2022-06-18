import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/presentation/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { authProvider } from './auth.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/domain/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [...authProvider],
})
export class AuthModule {}
