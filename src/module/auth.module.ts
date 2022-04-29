import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from 'src/infra/middleware/auth.middleware';
import { AuthController } from 'src/presentation/auth.controller';
import { UsersController } from '../presentation/users.controller';
import { UserRepository } from '../core/repositories/user.repository';
import { UsersCacheMemoryRepository } from '../data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '../use-cases/auth/create-user.usecase';
import { LoginUseCase } from '../use-cases/auth/login.usecase';
import { GetAllUsersUseCase } from '../use-cases/auth/get-all-users.usecase';
import { UserCreateMapper } from '../core/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from '../core/domain/mappers/users/user-created.mapper';

@Module({
  imports: [],
  controllers: [UsersController, AuthController],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
    LoginUseCase,
    UserCreateMapper,
    UserCreatedMapper,
  ],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UsersController);
  }
}
