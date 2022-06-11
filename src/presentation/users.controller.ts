import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UserCreatedDto, UserCreateDto } from 'src/shared/dtos/user';
import { CreateUserUseCase } from 'src/use-cases/users/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/users/get-all-users.usecase';
import { GetUserUsecase } from 'src/use-cases/users/get-user.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private getAllUsers: GetAllUsersUseCase,
    private createUser: CreateUserUseCase,
    private getUse: GetUserUsecase,
  ) {}

  @Get()
  public async findAll(): Promise<{ users: UserCreatedDto[] }> {
    return await this.getAllUsers.execute();
  }

  @Post()
  public async create(
    @Body() body: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    return await this.createUser.execute(body);
  }

  @Get(':id')
  public async findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<{ user: UserCreatedDto }> {
    return await this.getUse.execute(id);
  }
}
