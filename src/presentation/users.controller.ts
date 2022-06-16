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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/module/auth/role/role.guard';
import { Role } from 'src/shared/decorator/role.decorator';
import {
  UserCreatedDto,
  UserCreateDto,
  UserUpdateDto,
} from 'src/shared/dtos/users';
import { HttpCodeEnum } from 'src/shared/enums/http-coded.enum';
import { Roles } from 'src/shared/enums/roles.enum';
import {
  GetAllUsersUseCase,
  CreateUserUseCase,
  GetUserUsecase,
  UpdateUserUseCase,
} from 'src/core/application/users';
import { RemoveUserUseCase } from 'src/core/application/users/remove-user.usecase';

@Controller('/users')
// @UseGuards(AuthGuard('jwt'), RoleGuard)
export class UsersController {
  constructor(
    private readonly getAllUsers: GetAllUsersUseCase,
    private readonly createUser: CreateUserUseCase,
  ) {}

  // @Role(Roles.USER)
  @Get()
  @HttpCode(HttpCodeEnum.SUCCESS)
  public async findAll(): Promise<{ users: UserCreatedDto[] }> {
    return await this.getAllUsers.execute();
  }

  // @Role(Roles.ADMIN)
  @Post()
  @HttpCode(HttpCodeEnum.CREATED)
  public async create(
    @Body() body: UserCreateDto,
  ): Promise<{ user: UserCreatedDto }> {
    return await this.createUser.execute(body);
  }

  // @Role(Roles.USER)
  // @Get(':id')
  // @HttpCode(HttpCodeEnum.SUCCESS)
  // public async findOne(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  // ): Promise<{ user: UserCreatedDto }> {
  //   return await this.getUse.execute(id);
  // }

  // @Role(Roles.ADMIN)
  // @Put(':id')
  // @HttpCode(HttpCodeEnum.SUCCESS)
  // public async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body() body: UserUpdateDto,
  // ): Promise<{ user: UserCreatedDto }> {
  //   return await this.updateUser.execute(id, body);
  // }

  // @Role(Roles.ADMIN)
  // @Delete(':id')
  // @HttpCode(HttpCodeEnum.NO_CONTENT)
  // public async delete(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  // ): Promise<void> {
  //   await this.removeUser.execute(id);
  // }
}
