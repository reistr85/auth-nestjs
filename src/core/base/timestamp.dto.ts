import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TimestampDto {
  @Expose()
  @ApiProperty()
  created_at: Date;

  @Expose()
  @ApiProperty({ required: false })
  updated_at: Date;

  @Expose()
  @ApiProperty({ required: false })
  deleted_at: Date;
}
