import { Module } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/presentation/users.controller';
import { userProvider } from './users.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersModule],
  controllers: [UsersController],
  providers: [...userProvider],
})
export class UsersModule {}
