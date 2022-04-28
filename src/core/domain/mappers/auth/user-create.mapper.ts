import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { User } from 'src/core/domain/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCreateMapper extends Mapper<UserCreateDto, User> {
  public mapFrom(data: UserCreateDto): User {
    const user = new User();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.deleted_at = data.deleted_at;
    return user;
  }

  public mapTo(data: User): UserCreateDto {
    const user = new UserCreateDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.deleted_at = data.deleted_at;
    return user;
  }
}
