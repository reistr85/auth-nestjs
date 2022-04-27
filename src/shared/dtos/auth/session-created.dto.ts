import { UserEntity } from 'src/core/domain/entities/user.entity';

export class SessionCreatedDto {
  user: UserEntity;
  token: string;
}
