import { TimestampDto } from 'src/core/base/timestamp.dto';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreatedDto extends TimestampDto {
  @Expose()
  @ApiProperty({
    example: 'asd65as4d.ASDas1d351a3s51das.ass654',
  })
  id: string;

  @Expose()
  @ApiProperty({
    example: 'Fulano da Silva',
  })
  name: string;

  @Expose()
  @ApiProperty({
    example: 'fulano@usemobile.xyz',
  })
  email: string;
}
