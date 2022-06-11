import { Module } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/presentation/users.controller';
import { UserRepository } from 'src/data/type-orm/user.repository';
import {
  GetAllUsersUseCase,
  CreateUserUseCase,
  GetUserUsecase,
  UpdateUserUseCase,
  RemoveUserUseCase,
} from 'src/use-cases/users';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UserRepository,
    GetAllUsersUseCase,
    CreateUserUseCase,
    GetUserUsecase,
    UpdateUserUseCase,
    RemoveUserUseCase,
  ],
})
export class UsersModule {}
