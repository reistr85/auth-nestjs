import { Mapper } from 'src/core/base/mapper';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedDto } from 'src/shared/dtos/users/user-created.dto';
import { plainToClass } from 'class-transformer';

export class UserCreatedMapper extends Mapper<UserCreatedDto, User> {
  public mapFrom(data: UserCreatedDto): User {
    const user = new User();
    return Object.assign(user, { ...data });
  }

  public mapTo(data: User): UserCreatedDto {
    delete data.password;
    return plainToClass(UserCreatedDto, data);
  }
}
