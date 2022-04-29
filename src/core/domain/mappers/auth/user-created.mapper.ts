import { Mapper } from 'src/core/base/mapper';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedDto } from 'src/shared/dtos/auth/user-created.dto';

export class UserCreatedMapper extends Mapper<UserCreatedDto, User> {
  public mapFrom(data: UserCreatedDto): User {
    const user = new User();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.created_at = data.created_at;
    user.updated_at = data.updated_at;
    user.deleted_at = data.deleted_at;

    return user;
  }

  public mapTo(data: User): UserCreatedDto {
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
