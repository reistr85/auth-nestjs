import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthMiddleware } from './infra/middleware/auth.middleware';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory.repository';
import { UsersControllers } from './presentation/users.controller';
import { CreateUserUseCase } from './use-cases/create-user.usecase';
import { GetAllUsersUseCase } from './use-cases/get-all-users.usecase';

@Module({
  imports: [],
  controllers: [AppController, UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AppController);
  }
}
