import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreatedDto, UserCreateDto } from 'src/shared/dtos/user';
import { CreateUserUseCase } from 'src/use-cases/users/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/users/get-all-users.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private getAllUsers: GetAllUsersUseCase,
    private createUser: CreateUserUseCase,
  ) {}

  @Get()
  public async getAll(): Promise<{ users: UserCreatedDto[] }> {
    return await this.getAllUsers.execute();
  }

  @Post()
  public async create(
    @Body() body: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    return await this.createUser.execute(body);
  }
}
