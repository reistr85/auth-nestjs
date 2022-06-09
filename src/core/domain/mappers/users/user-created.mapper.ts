import { Mapper } from 'src/core/base/mapper';
import { User } from 'src/core/domain/entities/user.entity';
import { UserCreatedDto } from 'src/shared/dtos/user/user-created.dto';
import { plainToClass } from 'class-transformer';

export class UserCreatedMapper extends Mapper<UserCreatedDto, User> {
  public mapFrom(data: UserCreatedDto): User {
    const user = new User();
    return Object.assign(user, {
      id: 'data.id',
      name: data.name,
      email: data.email,
    });
  }

  public mapTo(data: User): UserCreatedDto {
    return plainToClass(UserCreatedDto, data, {
      excludeExtraneousValues: true,
    });
  }
}
