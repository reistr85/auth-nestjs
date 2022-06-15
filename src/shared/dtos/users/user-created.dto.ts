import { TimestampDto } from 'src/core/base/timestamp.dto';
import { Expose } from 'class-transformer';
import { Role } from 'src/core/domain/entities/role.entity';

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
  role: Role[];
}
