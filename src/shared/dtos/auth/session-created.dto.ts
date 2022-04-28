import { User } from 'src/core/domain/entities/user.entity';

export class SessionCreatedDto {
  user: User;
  token: string;
}
