import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/auth/user-created.dto';
import { CreateUserUseCase } from 'src/use-cases/auth/create-user.usecase';
import { GetAllUsersUseCase } from 'src/use-cases/auth/get-all-users.usecase';

@Controller('/users')
export class UsersController {
  constructor(
    private createUserUserCase: CreateUserUseCase,
    private getAllUsersUserCase: GetAllUsersUseCase,
  ) {}

  @Post()
  public create(@Body() user: UserCreateDto): Observable<UserCreatedDto> {
    return this.createUserUserCase.execute(user);
  }

  @Get()
  public findAll(): Observable<UserCreatedDto[]> {
    return this.getAllUsersUserCase.execute();
  }
}
