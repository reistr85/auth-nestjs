import { Module } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/presentation/users.controller';
import { CreateUserUseCase } from 'src/use-cases/users/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/users/get-all-users.usecase';
import { UserRepository } from 'src/data/type-orm/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserRepository, GetAllUsersUseCase, CreateUserUseCase],
})
export class UsersModule {}
