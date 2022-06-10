import { Expose } from 'class-transformer';

export class TimestampDto {
  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;

  @Expose()
  deleted_at: Date;
}
