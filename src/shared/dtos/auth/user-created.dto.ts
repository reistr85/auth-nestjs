import { TimestampDto } from 'src/core/base/timestamp.dto';

export class UserCreatedDto extends TimestampDto {
  id: string;
  name: string;
}
