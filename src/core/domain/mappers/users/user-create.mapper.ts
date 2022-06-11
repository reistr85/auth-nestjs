import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/user/user-create.dto';
import { User } from 'src/core/domain/entities/user.entity';
import { plainToClass } from 'class-transformer';

export class UserCreateMapper extends Mapper<UserCreateDto, User> {
  public mapFrom(data: UserCreateDto): User {
    const user = new User();
    const uu = Object.assign(user, {
      type_user_id: data.type_user_id,
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return uu;
  }

  public mapTo(data: User): UserCreateDto {
    return plainToClass(UserCreateDto, data);
  }
}
