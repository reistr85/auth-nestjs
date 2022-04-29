import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { User } from 'src/core/domain/entities/user.entity';

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
    const user = new UserCreateDto();
    return Object.assign(user, {
      id: data.id,
      name: data.name,
      email: data.email,
    });
  }
}
