import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { UserCreatedDto } from 'src/shared/dtos/auth/user-created.dto';

export class UserCreatedMapper extends Mapper<UserCreatedDto, UserEntity> {
  public mapFrom(data: UserCreatedDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.deleted_at = data.deleted_at;

    return user;
  }

  public mapTo(data: UserEntity): UserCreatedDto {
    const user = new UserCreatedDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.deleted_at = data.deleted_at;
    return user;
  }
}
