import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/auth/user-created.dto';
import { CreateUserUseCase } from 'src/use-cases/auth/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/auth/get-all-users.usecase';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
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
  @ApiCreatedResponse({ type: UserCreatedDto })
  public create(@Body() user: UserCreateDto): Promise<UserCreatedDto> {
    return this.createUserUserCase.execute(user);
  }

  @Get()
  @ApiOkResponse({ type: [UserCreatedDto] })
  public findAll(): UserCreatedDto[] {
    return this.getAllUsersUserCase.execute();
  }
}
