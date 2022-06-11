import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  UserCreatedDto,
  UserCreateDto,
  UserUpdateDto,
} from 'src/shared/dtos/users';
import { HttpCodeEnum } from 'src/shared/enums/http-coded.enumn';
import {
  GetAllUsersUseCase,
  CreateUserUseCase,
  GetUserUsecase,
  UpdateUserUseCase,
} from 'src/use-cases/users';
import { RemoveUserUseCase } from 'src/use-cases/users/remove-user.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly getAllUsers: GetAllUsersUseCase,
    private readonly createUser: CreateUserUseCase,
    private readonly getUse: GetUserUsecase,
    private readonly updateUser: UpdateUserUseCase,
    private readonly removeUser: RemoveUserUseCase,
  ) {}

  @Get()
  @HttpCode(HttpCodeEnum.SUCCESS)
  public async findAll(): Promise<{ users: UserCreatedDto[] }> {
    return await this.getAllUsers.execute();
  }

  @Post()
  @HttpCode(HttpCodeEnum.CREATED)
  public async create(
    @Body() body: UserCreateDto,
  ): Promise<{ user: UserCreateDto }> {
    return await this.createUser.execute(body);
  }

  @Get(':id')
  @HttpCode(HttpCodeEnum.SUCCESS)
  public async findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<{ user: UserCreatedDto }> {
    return await this.getUse.execute(id);
  }

  @Put(':id')
  @HttpCode(HttpCodeEnum.SUCCESS)
  public async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UserUpdateDto,
  ): Promise<{ user: UserCreatedDto }> {
    return await this.updateUser.execute(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpCodeEnum.NO_CONTENT)
  public async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    await this.removeUser.execute(id);
  }
}
