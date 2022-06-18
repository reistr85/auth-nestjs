import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LoginUseCase } from 'src/core/application/auth/login.usecase';
import { ValidateUserUseCase } from 'src/core/application/auth/validate-user.usecase';
import { User } from 'src/core/domain/entities/user.entity';
import { UserRepository } from 'src/core/domain/repositories/user.repository';
import { UserTypeOrmRepository } from 'src/infra/db/type-orm/user-typeorm.repository';
import { Repository } from 'typeorm';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

export const authProvider = [
  {
    provide: UserTypeOrmRepository,
    useFactory: (repo: Repository<User>) => {
      return new UserTypeOrmRepository(repo);
    },
    inject: [getRepositoryToken(User)],
  },
  {
    provide: ValidateUserUseCase,
    useFactory: (userRepository: UserRepository): ValidateUserUseCase => {
      return new ValidateUserUseCase(userRepository);
    },
    inject: [UserTypeOrmRepository],
  },
  {
    provide: LoginUseCase,
    useFactory: (jwtService: JwtService): LoginUseCase => {
      return new LoginUseCase(jwtService);
    },
    inject: [JwtService],
  },
  {
    provide: LocalStrategy,
    useFactory: (validateUserUseCase: ValidateUserUseCase): LocalStrategy => {
      return new LocalStrategy(validateUserUseCase);
    },
    inject: [ValidateUserUseCase],
  },
  {
    provide: JwtStrategy,
    useFactory: (): JwtStrategy => {
      return new JwtStrategy();
    },
  },
];
