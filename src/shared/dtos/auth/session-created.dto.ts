import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/core/domain/entities/user.entity';

export class SessionCreatedDto {
  @Expose()
  @ApiProperty({ type: User })
  user: User;

  @Expose()
  @ApiProperty({
    example: 'asd65as4d.ASDas1d351a3s51das.ass654',
  })
  token: string;
}
