import { Mapper } from 'src/core/base/mapper';
import { UserCreateDto } from 'src/shared/dtos/auth/user-create.dto';
import { UserEntity } from 'src/core/domain/entities/user.entity';

export class UserCreateMapper extends Mapper<UserCreateDto, UserEntity> {
  public mapFrom(data: UserCreateDto): UserEntity {
    const user = new UserEntity();
    return Object.assign(user, {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  public mapTo(data: UserEntity): UserCreateDto {
    const user = new UserCreateDto();
    return Object.assign(user, {
      id: data.id,
      name: data.name,
      email: data.email,
    });
  }
}
