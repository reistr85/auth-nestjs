import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { CreateUserUseCase } from 'src/use-cases/auth/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/auth/get-all-users.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private createUserUserCase: CreateUserUseCase,
    private getAllUsersUserCase: GetAllUsersUseCase,
  ) {}

  @Post()
  public create(@Body() user: UserCreateDto) {
    return this.createUserUserCase.execute(user);
  }

  @Get()
  public findAll(): UserEntity[] {
    return this.getAllUsersUserCase.execute();
  }
}
