import { getRepositoryToken } from '@nestjs/typeorm';
import {
  CreateUserUseCase,
  GetAllUsersUseCase,
  GetUserUsecase,
  RemoveUserUseCase,
  UpdateUserUseCase,
} from 'src/core/application/users';
import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserTypeOrmRepository } from 'src/infra/db/type-orm/user-typeorm.repository';
import { Repository } from 'typeorm';

export const userProvider = [
  {
    provide: UserTypeOrmRepository,
    useFactory: (repo: Repository<User>) => {
      return new UserTypeOrmRepository(repo);
    },
    inject: [getRepositoryToken(User)],
  },
  {
    provide: GetAllUsersUseCase,
    useFactory: (userRepository: UserRepository): GetAllUsersUseCase => {
      return new GetAllUsersUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  {
    provide: CreateUserUseCase,
    useFactory: (userRepository: UserRepository): CreateUserUseCase => {
      return new CreateUserUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  {
    provide: GetUserUsecase,
    useFactory: (userRepository: UserRepository): GetUserUsecase => {
      return new GetUserUsecase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  {
    provide: UpdateUserUseCase,
    useFactory: (userRepository: UserRepository): UpdateUserUseCase => {
      return new UpdateUserUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  {
    provide: RemoveUserUseCase,
    useFactory: (userRepository: UserRepository): RemoveUserUseCase => {
      return new RemoveUserUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
];
