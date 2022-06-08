import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthMiddleware } from 'src/infra/middleware/auth.middleware';
import { UsersController } from '../presentation/users.controller';
import { UserRepository } from '../core/repositories/user.repository';
import { UsersCacheMemoryRepository } from '../data/cache-memory/users-cache-memory.repository';
import { CreateUserUseCase } from '../use-cases/auth/create-user.usecase';
import { GetAllUsersUseCase } from '../use-cases/auth/get-all-users.usecase';
import { UserCreateMapper } from '../core/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from '../core/domain/mappers/users/user-created.mapper';
import { DatabaseModule } from 'src/database.module';
import { photoProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    // {
    //   provide: UserRepository,
    //   useClass: UsersCacheMemoryRepository,
    // },
    ...photoProviders,
    CreateUserUseCase,
    GetAllUsersUseCase,
    UserCreateMapper,
    UserCreatedMapper,
  ],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UsersController);
  }
}
