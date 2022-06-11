import { TimestampDto } from 'src/core/base/timestamp.dto';
import { Expose } from 'class-transformer';
import { TypeUser } from 'src/core/domain/entities/type-user.entity';

export class UserCreatedDto extends TimestampDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  type_user_id: string;

  @Expose()
  type_user: TypeUser[];
}
