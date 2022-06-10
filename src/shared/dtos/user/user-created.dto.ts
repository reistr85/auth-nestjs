import { TimestampDto } from 'src/core/base/timestamp.dto';
import { Expose } from 'class-transformer';

export class UserCreatedDto extends TimestampDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;
}
