import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { UsersController } from 'src/presentation/users.controller';
import { CreateUserUseCase } from 'src/use-cases/users/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/users/get-all-users.usecase';
import { UsersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UsersProviders, GetAllUsersUseCase, CreateUserUseCase],
})
export class UsersModule {}
