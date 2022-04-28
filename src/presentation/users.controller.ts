import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { CreateUserUseCase } from 'src/use-cases/auth/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/auth/get-all-users.usecase';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('/users')
@ApiBearerAuth()
export class UsersController {
  constructor(
    private createUserUserCase: CreateUserUseCase,
    private getAllUsersUserCase: GetAllUsersUseCase,
  ) {}

  @Post()
  @ApiBody({ type: UserCreateDto })
  public create(@Body() user: UserCreateDto) {
    return this.createUserUserCase.execute(user);
  }

  @Get()
  @ApiOkResponse({ type: [UserEntity] })
  public findAll(): UserEntity[] {
    return this.getAllUsersUserCase.execute();
  }
}
