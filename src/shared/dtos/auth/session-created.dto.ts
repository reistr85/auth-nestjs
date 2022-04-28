import { UserEntity } from 'src/core/domain/entities/user.entity';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SessionCreatedDto {
  @Expose()
  @ApiProperty({ type: UserEntity })
  user: UserEntity;

  @Expose()
  @ApiProperty({
    example: 'asd65as4d.ASDas1d351a3s51das.ass654',
  })
  token: string;
}
