import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/user/user-create.dto';
import { User } from 'src/core/domain/entities/user.entity';
import { plainToClass } from 'class-transformer';

export class UserCreateMapper extends Mapper<UserCreateDto, User> {
  public mapFrom(data: UserCreateDto): User {
    const user = new User();
    return Object.assign(user, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  public mapTo(data: User): UserCreateDto {
    return plainToClass(UserCreateDto, data);
  }
}
